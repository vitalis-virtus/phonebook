/* eslint-disable no-unused-expressions */
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import authActions from "./auth-actions";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: (_, __) => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: (_, __) => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: (_, __) => true,
  [authActions.loginSuccess]: (_, __) => true,
  [authActions.getCurrentUserSuccess]: (_, __) => true,
  [authActions.registerError]: (_, __) => false,
  [authActions.loginError]: (_, __) => false,
  [authActions.getCurrentUserError]: (_, __) => false,
  [authActions.logoutSuccess]: (_, __) => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
