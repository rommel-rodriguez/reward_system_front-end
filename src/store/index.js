import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import authService from "../services/authService";

import { authenticationReducer } from "./slices/authenticationSlice";
import { authApi } from "./api/authApi";


const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer, 
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(authApi.middleware);
    },
})

setupListeners(store.dispatch);
export {store};
export { useSignInMutation } from './api/authApi';