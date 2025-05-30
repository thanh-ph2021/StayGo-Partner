import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./LoginPage.css"

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login with:", { email, password })
    navigate("/app")
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Host Login</h2>

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
          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">
          Đăng nhập
        </button>

        <p className="login-note">Bạn chưa có tài khoản? Liên hệ admin để đăng ký.</p>
      </form>
    </div>
  )
}

export default LoginPage
