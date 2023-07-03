import { configureStore } from "@reduxjs/toolkit";
import { gymstackSlice } from "./gymstack/gymstackSlice";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
	reducer: {
		gymStack: gymstackSlice.reducer,
		auth: authSlice.reducer
	}
})