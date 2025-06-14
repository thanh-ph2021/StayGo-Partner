import { createBrowserRouter } from "react-router-dom"

import RootLayout from "./root"
import LoginPage from "../features/auth/pages/LoginPage"
import HotelsPage from "../features/hotel/HotelPage"
import DashboardPage from "../features/dashboard/pages/DashboardPage"
import { RequireAuth } from "../components/RequireAuth"
import SignupPage from "../features/auth/pages/SignupPage"

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/",
    element: (
      <RequireAuth>
        <RootLayout />
      </RequireAuth>
    ),
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