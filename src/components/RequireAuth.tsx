import type { JSX } from "react"
import { Navigate, useLocation } from "react-router-dom"

import { useAuth } from "../hooks/useAuth"

interface RequireAuthProps {
  children: JSX.Element
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
