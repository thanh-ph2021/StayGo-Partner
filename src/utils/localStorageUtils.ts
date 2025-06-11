import type { UserModel } from "../models"

export const saveAuth = (token: string, user: UserModel) => {
  localStorage.setItem("token", token)
  localStorage.setItem("user", JSON.stringify(user))
}