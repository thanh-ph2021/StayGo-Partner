import type { UserModel } from "../models"

export interface ResponseAPI<T> {
    isSuccess: boolean,
    value?: T,
    error?: string
}

export interface AuthResponse {
    token: string,
    Expiration: Date,
    userProfile: UserModel
}

export interface LoginRequest {
    email: string,
    password: string
}

export interface RegisterRequest {
    fullName: string,
    email: string,
    password: string,
    userRoleId: string,
    userRole: string,
    phone: string
}