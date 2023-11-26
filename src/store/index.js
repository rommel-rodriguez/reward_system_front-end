import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import authService from "../services/authService";

import authReducer from "./slices/authSlice";
import { authApi } from "./api/authApi";
import { employeesApi } from "./api/employeesApi";
import { managersApi } from "./api/managersApi";
import { customersApi } from "./api/customersApi";


const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer, 
        identity: authReducer,
        [employeesApi.reducerPath]: employeesApi.reducer,
        [managersApi.reducerPath]: managersApi.reducer,
        [customersApi.reducerPath]: customersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(employeesApi.middleware)
            .concat(customersApi.middleware)
            .concat(managersApi.middleware);
    },
})

setupListeners(store.dispatch);

// TODO: Delete later, for debugging purposes only
window.store = store;
export {store};


export { useSignInMutation } from './api/authApi';
export {useFetchEmployeesQuery} from './api/employeesApi';
export {
    useFetchManagersQuery,
    useFetchManagerByIdQuery,
    useFetchManagedEmployeesByManagerIdQuery,
} from './api/managersApi';

export {
    useFetchCustomersQuery,
    useFetchCustomerByIdQuery,
    useAddCustomerMutation,
    useFetchCustomerOptionsQuery,
} from './api/customersApi';
    