import axiosClient from '../../apis/axiosClient'
import type { FilterRequest, HotelModel } from './type'

const hotelApi = {
    filter: (data: FilterRequest): Promise<HotelModel[]> => axiosClient.post('/hotel/filter', data),
    createHotel: (data: HotelModel): Promise<HotelModel> => axiosClient.post('/hotel/create-hotel', data),
    updateHotel: (data: HotelModel): Promise<HotelModel> => axiosClient.post('/hotel/update-hote​l', data),
    getHotelById: (id: string): Promise<HotelModel> => axiosClient.get(`/hotel/${id}`),
    deleteHotelById: (id: string): Promise<boolean> => axiosClient.delete(`/hotel/${id}`),
}

export default hotelApi