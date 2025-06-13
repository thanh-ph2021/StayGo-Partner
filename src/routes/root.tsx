import { Outlet } from "react-router-dom"

import Sidebar from "../components/Sidebar"
import RightSidebar from "../components/RightSidebar"

const RootLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen pl-5 pr-20 py-6">
        <Outlet />
      </div>
      <RightSidebar />
    </div>
  )
}

export default RootLayout
