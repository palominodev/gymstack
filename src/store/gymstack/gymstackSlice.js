import { createSlice } from '@reduxjs/toolkit';

export const gymstackSlice = createSlice({
	name: 'gymstack',

	initialState: {
		planes: [],
		users: [],
		searchUsers: [],
		activeUsers: 0,
		activePlans: 0
	},

	reducers: {
		setUsers: (state, {payload}) => {
			state.users = payload
		},
		setPlans: (state, {payload}) => {
			state.planes = payload
		},
		setActiveUsers:(state) => {
			state.activeUsers = state.users.filter( user => user.status !== 'deprecated').length
		},
		setCountPlans: (state) => {
			state.activePlans = state.planes.length
		},
		searchUsersByName: (state, {payload}) => {
			state.searchUsers = state.users.filter( user => user.name.toLowerCase().includes(payload.toLowerCase().trim()))
		},
		createUser: (state, {payload}) => {
			state.users = [...state.users, payload]
		},
		createPlan: (state, {payload}) => {
			state.planes = [...state.planes, payload]
		}
	},
});


export const { setUsers, setPlans,searchUsersByName, setActiveUsers,setCountPlans, createUser, createPlan } = gymstackSlice.actions;