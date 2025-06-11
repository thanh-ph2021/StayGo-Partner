import axiosClient from '../../apis/axiosClient'
import type { AuthResponse, ResponseAPI, LoginRequest, RegisterRequest } from '../../apis/type'

const authApi = {
    login: (data: LoginRequest): Promise<ResponseAPI<AuthResponse>> => axiosClient.post('/auth/login', data),
    register: (data: RegisterRequest): Promise<ResponseAPI<AuthResponse>> => axiosClient.post('/auth/register', data),
}

export default authApi