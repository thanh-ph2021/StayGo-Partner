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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await dispatch<any>(login({ email, password }))
    if (result?.isSuccess) {
      navigate("/")
    } else {
      alert("Đăng nhập thất bại: " + (result?.error || "Unknown error"))
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
            type="mật khẩu"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">
          Đăng nhập
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
