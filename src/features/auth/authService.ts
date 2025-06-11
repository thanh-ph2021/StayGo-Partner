import type { AuthResponse, LoginRequest, RegisterRequest, ResponseAPI } from "../../apis/type"
import type { UserModel } from "../../models"
import { saveAuth } from "../../utils/localStorageUtils"
import authApi from "./authApi"

export const authService = {
  async login(payload: LoginRequest): Promise<ResponseAPI<AuthResponse>> {
    const result = await authApi.login(payload)
    const { value } = result

    if (result.isSuccess && value && value.userProfile && value.token) {
      saveAuth(value.token, value.userProfile)
    }

    return result
  },

  async register(payload: RegisterRequest): Promise<ResponseAPI<AuthResponse>> {
    const result = await authApi.register(payload)
    const { value } = result

    if (result.isSuccess && value && value.userProfile && value.token) {
      saveAuth(value.token, value.userProfile)
    }

    return result
  },

  logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  },

  getToken(): string | null {
    return localStorage.getItem("token")
  },

  getUser(): UserModel | null {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) : null
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token")
  }
}