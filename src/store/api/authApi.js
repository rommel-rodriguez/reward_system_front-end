import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../../config/config';

const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: config.apiUrl + '/api/v1/auth',
  }),
  endpoints(builder) {
    return {
      signIn: builder.mutation({
        query: (credentials) => {
          return {
            url: '/signin',
            body: credentials, // {username, password}
            method: 'POST',
          };
        },
      }),
    };
  },
});

export const { useSignInMutation} = authApi;
export { authApi };