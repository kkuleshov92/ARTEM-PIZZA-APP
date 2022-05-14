import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from "../config/constants";
import { useAuthContext } from "../context/AuthContext";
import { useRef } from "react";


const Login = () => {
  const {
    signIn,
  } = useAuthContext();
  console.log('login')
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || ROUTES.home + '/' + ROUTES.constructor;

  const loginRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = loginRef.current.value;

    signIn(name, () => navigate(fromPage, {replace: true}))
  }

  return (
    <div>
      <h2>Login page</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" ref={loginRef} name="name" placeholder="Введите имя"/>

        <button>Войти</button>
      </form>
    </div>
  )
}

export default Login;