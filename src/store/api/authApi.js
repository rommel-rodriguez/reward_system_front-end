import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../../config/config';
import { setToken, removeToken } from '../slices/authSlice';

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
        onQueryStarted: (arg, { dispatch, queryFulfilled,}) => {
          // NOTE: queryFulfilled is a promise, so we could also handle it
          // using Async/Await. But currently we are using .then from the 
          // Fetch/Promise API stack. 

          console.log("[DEBUG] Inside onQueryStarted: dispatch", dispatch);
          console.log("[DEBUG] setToken: ", setToken);

          queryFulfilled.then(
            (response) => {
              console.log("[DEBUG] Here is the reponse!!!: ", response);
              console.log("[DEBUG] Here is token !!!: ", response.data.token);
              console.log("[DEBUG] Here is setToken !!!: ", setToken);
              let token = response.data.token;
              dispatch(setToken(token));
            }
          );
        },

      }),
    };
  },
});

export const { useSignInMutation} = authApi;
export { authApi };