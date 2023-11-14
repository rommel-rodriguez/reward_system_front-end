import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import authService from "../services/authService";

import authReducer from "./slices/authSlice";
import { authApi } from "./api/authApi";


const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer, 
        identity: authReducer,

    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(authApi.middleware);
    },
})

setupListeners(store.dispatch);

// TODO: Delete later, for debugging purposes only
window.store = store;
export {store};


export { useSignInMutation } from './api/authApi';