import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="app-layout">
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout