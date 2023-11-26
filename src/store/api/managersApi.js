import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from '../../config/config';

const managersApi = createApi({
    reducerPath: 'managers',
    baseQuery: fetchBaseQuery({
        baseUrl: config.apiUrl + '/api/v1/managers',
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
            fetchManagers: builder.query({
                query: () => {
                    return {
                        url: '',
                        method: 'GET',
                    };
                },
            }),
            fetchManagerById: builder.query({
                query: (employeeId) => {
                    return {
                        url: `/${employeeId}`,
                        method: 'GET',
                    };
                },
            }),
            fetchManagedEmployeesByManagerId: builder.query({
                query: (employeeId) => {
                    return {
                        url: `/${employeeId}/managedEmployees`,
                        method: 'GET',
                    };
                },

                transformResponse: (response, meta, arg) => {
                    // console.log("API Managed Employees Response", response);
                    const data = response;
                    const sellers = data._embedded.sellers;
                    const managedEmployees = sellers.map(
                        (seller) => {
                            return (
                                {
                                    documentType: seller.person.documentType,
                                    documentNumber: seller.person.documentNumber,
                                    lastName: seller.person.lastName,
                                    firstName: seller.person.firstName,
                                    cellPhoneNumber: seller.person.cellPhoneNumber,
                                    monthlyGoals: seller.monthlyGoals,
                                    selfLink: seller._links.self.href,
                                    salesLink: seller._links.sales.href,
                                }
                            );
                        }
                    );
                    console.log("API Managed Employees", managedEmployees);
                    return managedEmployees;
                },

            }),
        };
    },

}); 

export const {
    useFetchManagersQuery,
    useFetchManagerByIdQuery,
    useFetchManagedEmployeesByManagerIdQuery,
} = managersApi;

export {managersApi};