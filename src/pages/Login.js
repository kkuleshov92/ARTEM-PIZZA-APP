import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from "../config/constants";
import { useAuthContext } from "../context/AuthContext";
import { useCallback, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const Login = () => {
  const {
    user,
    handleAddUser,
  } = useAuthContext();

  // const navigate = useNavigate();
  // const location = useLocation();

  // const fromPage = location.state?.from?.pathname || ROUTES.home + '/' + ROUTES.constructor;

  // useEffect(() => {
  //   isAuthenticated && navigate(fromPage, {replace: true})
  // }, [ isAuthenticated ])

  const handleSignIn = useCallback((e) => {
    e.preventDefault();

    const {
      email,
      password,
    } = e.target.elements;

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error))

  }, [])

  const handleSignUp = useCallback((e) => {
    e.preventDefault();

    const {
      email,
      password,
    } = e.target.elements;

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <div>
        <h2>Login page</h2>

        <form onSubmit={handleSignIn}>
          <fieldset>
            <input type="email" name="email" placeholder="Email"/>
          </fieldset>

          <fieldset>
            <input type="password" name="password" placeholder="Password"/>
          </fieldset>

          <button>Войти</button>
        </form>
      </div>

      <div>
        <h2>Register</h2>

        <form onSubmit={handleSignUp}>
          <fieldset>
            <input type="email" name="email" placeholder="Email"/>
          </fieldset>

          <fieldset>
            <input type="password" name="password" placeholder="Password"/>
          </fieldset>

          <button>Войти</button>
        </form>
      </div>
    </div>
  )
}

export default Login;