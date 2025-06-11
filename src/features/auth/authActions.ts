import type { AuthResponse, LoginRequest, RegisterRequest, ResponseAPI } from "../../apis/type"
import type { AppDispatch } from "../../store"
import { authService } from "./authService"
import { loginSuccess, logout, registerSuccess } from "./authSlice"

export const login = (payload: LoginRequest) => async (dispatch: AppDispatch) => {
  try {
    const result: ResponseAPI<AuthResponse> = await authService.login(payload)

    if (result.isSuccess && result.value) {
      dispatch(loginSuccess(result.value.userProfile))
      return result
    } else {
      throw new Error(result.error || 'Login failed')
    }
  } catch (error) {
    console.error('Login error:', JSON.stringify(error))
    throw error
  }
}

export const register = (payload: RegisterRequest) => async (dispatch: AppDispatch) => {
  try {
    const result: ResponseAPI<AuthResponse> = await authService.register(payload)

    if (result.isSuccess && result.value) {
      dispatch(registerSuccess(result.value.userProfile))
      return result
    } else {
      throw new Error(result.error || 'Register failed')
    }
  } catch (error) {
    console.error('Register error:', JSON.stringify(error))
    throw error
  }
}

export const performLogout = () => (dispatch: AppDispatch) => {
  authService.logout()
  dispatch(logout())
}