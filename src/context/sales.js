import { useState, useEffect, useCallback, createContext } from "react";
import productsService from "../services/productsService";

const SalesContext = createContext();

function SalesProvider({children}) {
    const [saleDetails, setSaleDetails] = useState([]);
    const [productSelect, setProductSelect] = useState([]);
    // TODO: Replace this lambda for a authService function

    const addDetail = (newDetail) => {
        setSaleDetails([...saleDetails, newDetail]);
    };

    const removeDetail = (deleteDetail) => {
        setSaleDetails(
            // TODO: Should create a new array, thus triggering re-rendering
            // but, not quite sure, test later.
            saleDetails.filter(
                (detail) => detail.productId !== deleteDetail.productId
            )
        );
    };

    const updateDetail = (updatedDetail) => {
        const updatedDetails = saleDetails.filter(
                (detail) => detail.productId !== updatedDetail.productId
        );

        updatedDetails.push(updatedDetail);

        setSaleDetails(
           updatedDetails 
        );
    };

    useEffect( () => {
       const fetchData = async () => {
        // TODO: This can throw error if the back-end is not working, handle
        // apropriatedly
        const idsAndNames = await productsService.getProductIdsAndNames(); 
        // console.log(idsAndNames);
        setProductSelect(idsAndNames);
       };
       fetchData();
       // TODO: Recommended to return a cleanup function
    }, []);

    const shared = {
        productSelect,
        saleDetails,
        addDetail,
        removeDetail,
        updateDetail,
    };

    return (
        <SalesContext.Provider value={shared}>
            {children}
        </SalesContext.Provider>

    );
}

export default SalesContext;
export {SalesProvider};
