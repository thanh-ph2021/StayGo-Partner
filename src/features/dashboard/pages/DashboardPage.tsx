import "./DashboardPage.css"

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <h2>Tổng quan</h2>

      <div className="dashboard-cards">
        <div className="card">
          <h3>3</h3>
          <p>Khách sạn đang hoạt động</p>
        </div>

        <div className="card">
          <h3>12</h3>
          <p>Phòng đã đặt tháng này</p>
        </div>

        <div className="card">
          <h3>45,000,000₫</h3>
          <p>Doanh thu tháng này</p>
        </div>
      </div>

      <div className="dashboard-note">
        <p>👋 Chào mừng bạn quay lại! Kiểm tra tình trạng đặt phòng và doanh thu tại đây.</p>
      </div>
    </div>
  )
}

export default DashboardPage
