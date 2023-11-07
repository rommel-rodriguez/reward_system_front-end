import { configureStore, createSlice } from "@reduxjs/toolkit";
import authService from "../services/authService";

const identitySlice = createSlice({
    name: 'identity',
    initialState:
        JSON.parse(localStorage.getItem('persistentIdentity')) || {},
    reducers: {
        //TODO: Can NOT make requests inside a reducer, need to either use
        // Async Thunks or RTK to achieve this. The name of the login reducer
        // might need to be changed to reflect this, because after the
        // changes, this reducer is probably just going to update the state
        // related with the identity.
        async login(state, action) {
            console.log("Inside Redux Login");
            try{
                await authService.login(
                    action.payload.username,
                    action.payload.password
                );
                const retrievedIdentity =await authService.getIdentity();
                console.log("Temp Identity: ", retrievedIdentity);
                // Using Immer, so I can just assign(?) and the identity
                // application state is updated.
                state = retrievedIdentity;
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
    },
});

const store = configureStore({
    reducer: {
        identity: identitySlice.reducer,
    }
})

export {store};

export const { login } = identitySlice.actions.login;