import { createBrowserRouter } from "react-router-dom"

import RootLayout from "./root"
import LoginPage from "../features/auth/pages/LoginPage"
import HotelsPage from "../features/hotels/pages/HotelsPage"
import DashboardPage from "../features/dashboard/pages/DashboardPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/app",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "hotels",
        element: <HotelsPage />,
      },
    ],
  },
])