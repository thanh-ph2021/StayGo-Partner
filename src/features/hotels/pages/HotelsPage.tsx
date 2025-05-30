import { useState } from "react"
import "./HotelsPage.css"

type Hotel = {
  id: string;
  name: string;
  location: string;
  status: "active" | "inactive"
}

const dummyHotels: Hotel[] = [
  { id: "1", name: "Sunrise Hotel", location: "Hà Nội", status: "active" },
  { id: "2", name: "Ocean View", location: "Đà Nẵng", status: "inactive" },
  { id: "3", name: "Mountain Retreat", location: "Đà Lạt", status: "active" },
]

const HotelsPage = () => {
  const [hotels, setHotels] = useState<Hotel[]>(dummyHotels)

  return (
    <div className="hotels-page">
      <div className="hotels-header">
        <h2>Danh sách khách sạn</h2>
        <button className="add-button">+ Thêm khách sạn</button>
      </div>

      <table className="hotels-table">
        <thead>
          <tr>
            <th>Tên khách sạn</th>
            <th>Địa điểm</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.id}>
              <td>{hotel.name}</td>
              <td>{hotel.location}</td>
              <td>
                <span
                  className={
                    hotel.status === "active"
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {hotel.status === "active" ? "Đang hoạt động" : "Tạm dừng"}
                </span>
              </td>
              <td>
                <button className="action-btn">Xem</button>
                <button className="action-btn">Sửa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HotelsPage
