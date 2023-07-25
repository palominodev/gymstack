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
			state.searchUsers = state.users.filter( user => {
				const fullName = `${user.name} ${user.last_name}`
				return fullName.toLowerCase().includes(payload.toLowerCase().trim())
			})
		},
		createUser: (state, {payload}) => {
			state.users = [...state.users, payload]
		},
		createPlan: (state, {payload}) => {
			state.planes = [...state.planes, payload]
		},
		removePlan: (state, {payload}) => {
			state.planes = state.planes.filter( plan => plan.id !== payload)
		},
		removeUser: (state,{payload}) => {
			state.users = state.users.filter( user => user.uid !== payload)
		},
		addCounterCompleteDays: ( state, {payload} ) => {
			state.users = state.users.map( user => {
				if(user.uid === payload){
					user.complete_days+=1
				}
				return user
			})
			state.searchUsers = state.searchUsers.map( user => {
				if(user.uid === payload){
					user.complete_days+=1
				}
				return user
			})
		},
		addMonthsSuscription: (state, {payload}) => {
			state.users = state.users.map(user => {
				if(user.uid === payload.id) {
					user.type = payload.type
					user.vence = payload.vence
				}
				return user
			})
			state.searchUsers = state.searchUsers.map(user => {
				if(user.uid === payload.id) {
					user.type = payload.type
					user.vence = payload.vence
				}
				return user
			})
		}
	},
});


export const { setUsers, setPlans,searchUsersByName, setActiveUsers,setCountPlans, createUser, createPlan, removePlan, removeUser,addCounterCompleteDays, addMonthsSuscription } = gymstackSlice.actions;