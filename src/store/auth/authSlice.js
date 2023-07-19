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
		login: (state) => {
			state.status = AUTH_STATUS.AUTHENTICATED
		},
		logout: (state) => {
			state.status = AUTH_STATUS.NOT_AUTHENTICATED
			state.uid = null
			state.displayName = null
			state.photoURL = null
			state.email = null
			state.errorMessage = null
		}
	},
});


export const { login, logout } = authSlice.actions;