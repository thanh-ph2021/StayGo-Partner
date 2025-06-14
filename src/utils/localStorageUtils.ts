import { TOKEN, USER_PROFILE } from "../constants"
import type { UserModel } from "../models"

export const saveAuth = (token: string, user: UserModel) => {
  localStorage.setItem(TOKEN, token)
  localStorage.setItem(USER_PROFILE, JSON.stringify(user))
}

export const removeAuth = () => {
  localStorage.removeItem(TOKEN)
  localStorage.removeItem(USER_PROFILE)
}