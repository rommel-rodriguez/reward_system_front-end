import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from '../../config/config';

const employeesApi = createApi({
    reducerPath: 'employees',
    baseQuery: fetchBaseQuery({
        baseUrl: config.apiUrl + '/api/v1/employees',
    }),
    endpoints(builder) {
        return {
            fetchEmployees: builder.query({
                query: () => {
                    return {
                        url: '',
                        method: 'GET',
                    };
                },
            }),
        };
    },

}); 

export const {
    useFetchEmployeesQuery,
} = employeesApi;

export {employeesApi};