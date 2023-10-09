import { useState, useEffect, useContext, useCallback, createContext } from "react";
import api from "../api/api";
import { rawApi } from "../api/api";
import authService from "../services/authService";


const IdentityContext = createContext();

function IdentityProvider({children}) {
    const [identity, setIdentity] = useState({});
    console.log("Identity: ", identity);

    useEffect( () => {
        const persistentIdentity = localStorage.getItem('persistentIdentity');
        if (persistentIdentity) {
            setIdentity(JSON.parse(persistentIdentity));
        }
    //    const fetchData = async () => {
    //         let localIdentity = await authService.getIdentity();
    //         console.log("Local Identity: ", localIdentity);
    //         setIdentity(localIdentity);
    //     };
    // //    return () => { };
    //    fetchData();
    }, []);

    useEffect(() => {
        localStorage.setItem('persistentIdentity', JSON.stringify(identity));
    }, [identity]);

    const login =  async (username, password) => {
        console.log("Inside Context Login");
        try{
            await authService.login(username, password);
            const tempIdentity =await authService.getIdentity();
            // console.log("Identity: ", identity);
            console.log("Temp Identity: ", tempIdentity);
            // setIdentity({...identity, ...tempIdentity});
            setIdentity(tempIdentity);
            // console.log("Identity: ", identity);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
    const logout = () => {
        authService.logout();
    };
    const isTokenValid =  () => {
        return authService.isTokenValid();
    };
    const signup =  async (username, password, employeeId = null) => {
        await authService.signup(username, password, employeeId);
    };

    const shared = {
        identity,
        login,
        logout,
        isTokenValid,
        signup,
    };

    return (
        <IdentityContext.Provider value={shared}>
            {children}
        </IdentityContext.Provider>

    );
}

export default IdentityContext;
export {IdentityProvider};
