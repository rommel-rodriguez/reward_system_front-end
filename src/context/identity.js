import { useState, useContext, useCallback, createContext } from "react";
import api from "../api/api";
import { rawApi } from "../api/api";
import authService from "../services/authService";

const IdentityContext = createContext();

function IdentityProvider({children}) {
    const [identity, setIdentity] = useState({});

    const shared = {
        identity,
        login: async (username, password) => {
            try{
                await authService.login(username, password);
                setIdentity(await authService.getIdentity());
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        logout: () => {
            authService.logout();
        },
        isTokenValid: () => {
            return authService.isTokenValid();
        },
        signup: async (username, password, employeeId = null) => {
            authService.signup(username, password, employeeId);
        },

    };

    return (
        <IdentityContext value={shared}>
            {children}
        </IdentityContext>

    );
}

export default IdentityContext;
export {IdentityProvider};
