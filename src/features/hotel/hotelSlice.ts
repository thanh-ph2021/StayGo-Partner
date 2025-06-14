import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { RootState } from '../../store/type'
import type { HotelModel } from './type'
import hotelApi from './hotelApi';

interface HotelState {
    hotelList: HotelModel[];
    selectedHotel: HotelModel | null;
    loading: boolean;
    error: string | null;
}

const initialState: HotelState = {
    hotelList: [],
    selectedHotel: null,
    loading: false,
    error: null,
};

export const fetchAllHotels = createAsyncThunk(
  'hotel/fetchAllHotels',
  async (_, { rejectWithValue }) => {
    try {
      return await hotelApi.filter({pageIndex: 1, pageSize: 10});
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Lỗi tải danh sách khách sạn');
    }
  }
);

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    clearSelectedHotel(state) {
      state.selectedHotel = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.hotelList = action.payload;
      })
      .addCase(fetchAllHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
});

export const { clearSelectedHotel } = hotelSlice.actions;
export const selectHotelState = (state: RootState) => state.hotel;

export default hotelSlice.reducer;