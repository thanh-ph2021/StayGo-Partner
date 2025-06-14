import { Search, Eye, Pencil, Trash2 } from "lucide-react";
import { useEffect } from "react";

import type { HotelModel } from "./type";
import { fetchAllHotels, selectHotelState } from "./hotelSlice";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";

export default function HotelPage() {
  const dispatch = useAppDispatch();
  const { hotelList, loading, error } = useAppSelector(selectHotelState);

  useEffect(() => {
    dispatch(fetchAllHotels());
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto mt-1">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Danh sách khách sạn</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm theo tên, địa chỉ khách sạn..."
                className="pl-8 pr-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm hover:bg-lime-500 font-bold">
              Thêm khách sạn
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-green-50 text-gray-400 text-xs">
              <tr>
                <th className="px-4 py-3 rounded-md">Tên khách sạn</th>
                <th className="px-4 py-3">Mô tả</th>
                <th className="px-4 py-3">Địa chỉ</th>
                <th className="px-4 py-3">Thành phố</th>
                <th className="px-4 py-3">Quốc gia</th>
                <th className="px-4 py-3">Đánh giá</th>
                <th className="px-4 py-3">Ngày tạo</th>
                <th className="px-4 py-3 rounded-md">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={8} className="text-center p-10 text-gray-400">
                    Đang tải dữ liệu...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={8} className="text-center p-10 text-red-500">
                    {error}
                  </td>
                </tr>
              ) : hotelList.length > 0 ? (
                hotelList.map((hotel: HotelModel) => (
                  <tr key={hotel.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="font-medium">{hotel.name}</div>
                      <div className="text-xs text-gray-500">{hotel.id}</div>
                    </td>
                    <td className="px-4 py-3 max-w-xs">
                      <div className="line-clamp-3 text-gray-700 text-sm">
                        {hotel.description || "—"}
                      </div>
                    </td>
                    <td className="px-4 py-3">{hotel.address}</td>
                    <td className="px-4 py-3">{hotel.city || "—"}</td>
                    <td className="px-4 py-3">{hotel.country || "—"}</td>
                    <td className="px-4 py-3">{hotel.rating || "—"}</td>
                    <td className="px-4 py-3">
                      {hotel.createdAt
                        ? new Date(hotel.createdAt).toLocaleDateString("vi-VN")
                        : "—"}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition" title="Xem chi tiết">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition" title="Chỉnh sửa">
                          <Pencil className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 rounded-md bg-red-100 hover:bg-red-200 transition" title="Xoá khách sạn">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center p-10 text-gray-400 italic">
                    Không có khách sạn nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
