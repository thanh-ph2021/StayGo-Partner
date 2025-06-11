import { useSelector } from 'react-redux'
import type { RootState } from '../store/type'

export function useAuth() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  return { isAuthenticated }
}