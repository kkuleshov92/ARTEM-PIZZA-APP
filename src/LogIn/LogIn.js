import { useCallback, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useAuthContext } from "../context/AuthContext";

import './LogIn.scss';


const LogIn = () => {
  const {
    handleAddUser,
  } = useAuthContext();

  const [ activeLoginTab, setActiveLoginTab ] = useState('sign_in');

  const auth = getAuth();

  const handleSignIn = useCallback((e) => {
    e.preventDefault();

    const {
      email,
      password,
    } = e.target.elements;

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(({user}) => {
        handleAddUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      })
      .catch(error => console.log(error))

  }, [auth, handleAddUser])

  const handleTabToggle = (tab) => {
    setActiveLoginTab(tab)
  }

  const handleSignUp = useCallback((e) => {
    e.preventDefault();

    const {
      email,
      password,
    } = e.target.elements;

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error))
  }, [auth])

  return (
    <div className="login">
      <div className="login__block">
        <div className="login__tabs">
          <div className="login__tab" onClick={() => {
            handleTabToggle('sign_in')
          }}>
            Sign in
          </div>

          <div className="login__tab" onClick={() => {
            handleTabToggle('sign_up')
          }}>
            Sign up
          </div>
        </div>

        {
          activeLoginTab === 'sign_in'
            ? <form onSubmit={handleSignIn} className="sign_in">
              <fieldset>
                <input type="email" name="email" placeholder="Email"/>
              </fieldset>

              <fieldset>
                <input type="password" name="password" placeholder="Password"/>
              </fieldset>

              <button>Войти</button>
            </form>
            : <form onSubmit={handleSignUp} className="sign_up">
              <fieldset>
                <input type="email" name="email" placeholder="Email"/>
              </fieldset>

              <fieldset>
                <input type="password" name="password" placeholder="Password"/>
              </fieldset>

              <fieldset>
                <input type="password" name="repeat_password" placeholder="Repeat password"/>
              </fieldset>

              <button>Войти</button>
            </form>
        }
      </div>
    </div>
  )
}

export default LogIn;