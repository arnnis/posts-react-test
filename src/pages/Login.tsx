import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/auth'
import './Login.css'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  return (
    <div className="Login">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <div
        className="button"
        onClick={() => {
          login()
          navigate('/profile')
        }}
      >
        Login
      </div>
    </div>
  )
}

export default Login
