import { createSlice } from '@reduxjs/toolkit';
import storageService from '../../services/storageService';
import { jwtDecode } from 'jwt-decode';
import { resetApp } from '../actions';

const decodeToken = (token) => {
  // NOTE: Either extracts all the necessary data from the token or makes
  // and API call to get it.
  // TODO: But, wait a sec, I can NOT (or should not) make requests inside
  // the reducers. Then, how do I do this?
  const decodedToken = jwtDecode(token);
  console.log('Decoded Token', decodedToken);
  return {
    ...decodedToken,
    username: decodedToken.sub,
  };
};

const authSlice = createSlice({
  name: 'identity',
  initialState:
    // NOTE: This state would look like: {token, user}
    // and the user object would have all the application's user's relevant
    // information
    // JSON.parse(localStorage.getItem('persistentIdentity')) || {},
    storageService.getFromLocal('persistentIdentity') || {
      user: null,
      token: null,
    },
  reducers: {
    //TODO: Can NOT make requests inside a reducer, need to either use
    // Async Thunks or RTK to achieve this. The name of the login reducer
    // might need to be changed to reflect this, because after the
    // changes, this reducer is probably just going to update the state
    // related with the identity.
    setToken(state, action) {
      // NOTE: Sets the token and extracts (somehow) the user information
      // and stores it, in both state and in localStorage.
      let user = null;
      let token = null;

      console.log('[DEBUG] Inside setToken slice action');
      console.log('[DEBUG] State before', state);
      token = action.payload;

      // state.token = token;
      // NOTE: Current assumption is that retrieveUser is not making
      // and API call
      user = decodeToken(token);

      if (!user) {
        console.log('[DEBUG] User not found!!!');
        // NOTE: Or maybe throw and error here, and notify the user.
        return;
      }

      state.token = token;
      state.user = user;

      console.log('[DEBUG] State after', state);
      console.log('[DEBUG] State after token: ', state.token);
      console.log('[DEBUG] State after user: ', state.user);

      storageService.persistInLocal('persistentIdentity', state);
    },
    removeToken(state, action) {
      // NOTE: Removes the token and returns user back to an empty object
      state.user = null;
      state.token = null;
      storageService.persistInLocal('persistentIdentity', state);
    },
  },
  extraReducers(builder) {
    builder.addCase(resetApp, (state, action) => {
      state.user = null;
      state.token = null;
      storageService.persistInLocal('persistentIdentity', state);
    });
  },
});

// export default authSlice;

// export const authenticationReducer = authSlice.reducer;

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
