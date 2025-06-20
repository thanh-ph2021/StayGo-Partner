import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./LoginPage.css"
import { login } from "../authActions"
import useAppDispatch from "../../../hooks/useAppDispatch"

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const result = await dispatch<any>(login({ email, password }))
      if (result?.isSuccess) {
        navigate("/")
      } else {
        alert("Đăng nhập thất bại: " + (result?.error || "Unknown error"))
      }
    } catch (err) {
      alert("Có lỗi xảy ra. Vui lòng thử lại.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>StayGo Partner</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">
          {isLoading ? (
            <div className="spinner"></div>
          ) : (
            "Đăng nhập"
          )}
        </button>

        <p className="login-note">
          Bạn chưa có tài khoản{' '}
          <span className="signup-link" onClick={() => navigate('/signup')}>
            Đăng ký ngay
          </span>
        </p>
      </form>
    </div>
  )
}

export default LoginPage
