import { createSlice } from '@reduxjs/toolkit';

export const gymstackSlice = createSlice({
	name: 'gymstack',

	initialState: {
		name: "Hola"
	},

	reducers: {
		setName: (state, {payload}) => {
			state.name = payload.name
		}
	},
});


export const { setName } = gymstackSlice.actions;