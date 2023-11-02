import { useState, useEffect, useContext, useCallback, createContext } from "react";
import api from "../api/api";
import { rawApi } from "../api/api";
import authService from "../services/authService";
import productsService from "../services/productsService";
import customerService from "../services/customerService";


const SalesContext = createContext();

function SalesProvider({children}) {
    const [saleDetails, setSaleDetails] = useState([]);
    const [productSelect, setProductSelect] = useState([]);
    const [options, setOptions] = useState([]);
    // TODO: Replace this lambda for a authService function
    const [identity, setIdentity] = useState(() => {
        return JSON.parse(localStorage.getItem('persistentIdentity')) || {} 
    });
    // console.log("Identity: ", identity);

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
    //    return () => { };
       fetchData();
    }, []);

    // useEffect(() => {
    //     console.log("Persistent Identity being set to: ", identity);
    //     localStorage.setItem('persistentIdentity', JSON.stringify(identity));
    // }, [identity]);


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
export {SalesProvider as SalesProvider};
