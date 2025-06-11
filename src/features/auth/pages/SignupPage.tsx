import { useState } from "react"
import { useNavigate } from "react-router-dom"

import useAppDispatch from "../../../hooks/useAppDispatch"
import { register } from "../authActions"
import type { RegisterRequest } from "../../../apis/type"

import "./SignUpPage.css"

const SignupPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phone, setPhone] = useState("")

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!")
      return
    }

    const payload: RegisterRequest = {
      fullName: name,
      email,
      password,
      phone,
      userRole: "Hotel Owner",
      userRoleId: "031C56BE-B83D-40DA-9917-82BBCCD7F92C"
    }

    const response = await dispatch<any>(register(payload))

    if (response.isSuccess) {
      navigate("/")
    } else {
      alert("Đăng ký thất bại: " + response.error)
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSignup}>
        <h2>Đăng ký làm đối tác StayGo</h2>

        <div className="form-group">
          <label>Họ và tên</label>
          <input
            type="text"
            placeholder="Nguyễn Văn A"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

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

        <div className="form-group">
          <label>Xác nhận mật khẩu</label>
          <input
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Số điện thoại</label>
          <input
            type="tel"
            placeholder="0987654321"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">
          Đăng ký
        </button>

        <p className="login-note">
          Đã có tài khoản?{" "}
          <span className="signup-link" onClick={() => navigate("/login")}>
            Đăng nhập
          </span>
        </p>
      </form>
    </div>
  )
}

export default SignupPage
