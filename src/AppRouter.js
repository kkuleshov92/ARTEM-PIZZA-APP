import React, { useCallback, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { CSSTransition } from "react-transition-group";

import { useAuthContext } from "./context/AuthContext";

import { ROUTES } from "./config/constants";

import Login from "./pages/Login";
import GlobalLoader from "./components/GlobalLoader";
import Home from "./pages/Home";

const AppRouter = () => {
  const {
    user,
    handleAddUser,
  } = useAuthContext();

  const [ isPending, setIsPending ] = useState(true);

  const [ isChecked, setIsChecked ] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    checkAuthUser(auth);
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (isChecked) {
      user
        ? navigate(ROUTES.home)
        : navigate(ROUTES.login, {state: location})

      setTimeout(() => {
        setIsPending(false);
      }, 500)
    }
  }, [ isChecked, location, navigate, user ])

  const checkAuthUser = useCallback((auth) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        handleAddUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      }

      setIsChecked(true);
    });
  }, [ handleAddUser ])

  return (
    <>
      <CSSTransition
        in={isPending}
        timeout={300}
        unmountOnExit
        classNames="loader"
      >
        <GlobalLoader/>
      </CSSTransition>

      <Routes>
        <Route path={ROUTES.home + '/*'} element={<Home/>}/>
        <Route path={ROUTES.login} element={<Login/>}/>
        <Route path="*" element={<Navigate to={ROUTES.home} replace/>}/>
      </Routes>
    </>
  )
};

export default AppRouter;