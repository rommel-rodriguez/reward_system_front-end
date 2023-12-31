import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authService from '../services/authService';

import authReducer from './slices/authSlice';
import { authApi } from './api/authApi';
import { employeesApi } from './api/employeesApi';
import { managersApi } from './api/managersApi';
import { customersApi } from './api/customersApi';
import saleListReducer from './slices/saleListSlice';
import { resetApp } from './actions';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    identity: authReducer,
    saleList: saleListReducer,
    [employeesApi.reducerPath]: employeesApi.reducer,
    [managersApi.reducerPath]: managersApi.reducer,
    [customersApi.reducerPath]: customersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(employeesApi.middleware)
      .concat(managersApi.middleware)
      .concat(customersApi.middleware);
  },
});

setupListeners(store.dispatch);

// TODO: Delete later, for debugging purposes only
window.store = store;
export { store };

export { addItem, removeItem, updateItem } from './slices/saleListSlice';
export { resetApp } from './actions';

export { useSignInMutation } from './api/authApi';
export { useFetchEmployeesQuery } from './api/employeesApi';
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
