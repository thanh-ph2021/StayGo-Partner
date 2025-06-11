import axios from 'axios'
import { TOKEN } from '../constants'

const axiosClient = axios.create({
  baseURL: 'http://192.168.0.11:8095/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem(TOKEN)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.log('API Error:', error?.response?.data || error.message)
    return Promise.reject(error?.response?.data || error)
  }
)

export default axiosClient