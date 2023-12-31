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
		login: (state, {payload}) => {
			state.status = AUTH_STATUS.AUTHENTICATED
			state.uid = payload?.uid
		},
		logout: (state, {payload}) => {
			state.status = AUTH_STATUS.NOT_AUTHENTICATED
			state.uid = null
			state.displayName = null
			state.photoURL = null
			state.email = null
			state.errorMessage = payload
		}
	},
});


export const { login, logout } = authSlice.actions;