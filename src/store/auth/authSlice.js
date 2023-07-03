import { createSlice } from '@reduxjs/toolkit';
import { AUTH_STATUS } from '../../types/AUTH_STATUS';

export const authSlice = createSlice({
	name: 'auth',

	initialState: {
		status: AUTH_STATUS.CHECKING,
		uid: null,
		displayName: null,
		photoURL: null,
		email: null,
		errorMessage: null
	},

	reducers: {
		login: (state, {payload}) => {}
	},
});


export const { login } = authSlice.actions;