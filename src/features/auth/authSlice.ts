import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { UserModel } from '../../models/UserModel'
import type { RootState } from '../../store/type'

interface AuthState {
    isAuthenticated: boolean
    user: UserModel | null
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
}

const setAuthUser = (state: AuthState, action: PayloadAction<UserModel>) => {
    state.isAuthenticated = true
    state.user = action.payload
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: setAuthUser,
        registerSuccess: setAuthUser,
        logout: (state) => {
            state.isAuthenticated = false
            state.user = null
        },
    },
})

export const { loginSuccess, registerSuccess, logout } = authSlice.actions
export default authSlice.reducer

export const userProfile = (state: RootState) => state.auth.user