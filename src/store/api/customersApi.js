import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from '../../config/config';
import customerService from "../../services/customerService";

const customersApi = createApi({
    reducerPath: 'managers',
    baseQuery: fetchBaseQuery({
        baseUrl: config.apiUrl + '/api/v1/customers',
        prepareHeaders: (headers, { getState }) => {
            // Get the token from the state
            const token = getState().identity.token; // Adjust based on where your token is stored

            // If the token is available, set the Authorization header
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
                console.log("Token: ",token, "set in header");
            }

            return headers;
        },
    }),
    endpoints(builder) {
        return {
            fetchCustomers: builder.query({
                query: () => {
                    return {
                        url: '',
                        method: 'GET',
                    };
                },
            }),
            fetchCustomerById: builder.query({
                query: (customerId) => {
                    return {
                        url: `/${customerId}`,
                        method: 'GET',
                    };
                },
            }),
            fetchCustomerOptions: builder.query({
                query: () => {
                    return {
                        url: '',
                        method: 'GET',
                    };
                },
                transformResponse: (response, meta, arg) => {
                    // console.log("API Managed Employees Response", response);
                    const customers = response._embedded.customers;

                    return customerService.constructCustomerOptions(customers);
                },
            }),
            addCustomer: builder.mutation({
                query: (customer) => {
                    return {
                        url: '',
                        method: 'POST',
                        body: customer,
                    };
                },
            }),
        };
    },

}); 

export const {
    useFetchCustomersQuery,
    useFetchCustomerByIdQuery,
    useAddCustomerMutation,
    useFetchCustomerOptionsQuery,
} = customersApi;

export {customersApi};