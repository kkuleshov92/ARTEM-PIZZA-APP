import React, { useCallback, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { CSSTransition } from "react-transition-group";

import { useAuthContext } from "./context/AuthContext";

import { ROUTES } from "./config/constants";

import Config from "./containers/Config/Config";
import Order from "./containers/Order";
import OrderList from "./containers/OrderList";
import Login from "./pages/Login";
import GlobalLoader from "./components/GlobalLoader";
import Home from "./pages/Home";
import PrivateRoutes from "./pages/PrivateRoutes";

const AppRouter = () => {
  const {
    user,
    handleAddUser,
  } = useAuthContext();

  const [ isPending, setIsPending ] = useState(true);

  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    checkAuthUser();
    // eslint-disable-next-line
  }, [])

  const checkAuthUser = useCallback(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        handleAddUser((prevState) => ({
          ...prevState,
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }))
      }
    });

    handleAddUser((prevState) => ({
      ...prevState,
      isPending: false,
    }))
  }, [ auth, handleAddUser ])

  useEffect(() => {
    setTimeout(() => {
      user && setIsPending(false);

      user
        ? navigate(ROUTES.constructor)
        : navigate(ROUTES.login)
    }, 1000)
  }, [ user ])

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

      {
        <Routes>
          <Route path={ROUTES.login + "/*"} element={<Login/>}/>
          <Route path={ROUTES.home + "/*"} element={<PrivateRoutes/>}/>
        </Routes>
      }

      {
        user
          ? (
            <Routes>
              <Route path={ROUTES.home} element={<Home/>}>
                <Route path={ROUTES.constructor} element={<Config/>}/>
                <Route path={ROUTES.order} element={<Order/>}/>
                <Route path={ROUTES.orderList} element={<OrderList/>}/>
                <Route path="*" element={<main>404</main>}/>
              </Route>
            </Routes>
          )
          : (
            <Routes>
              <Route path={ROUTES.login} element={<Login/>}/>
              <Route path="*" element={<Navigate to={ROUTES.login}/>}/>
            </Routes>
          )
      }
    </>
  )
};

export default AppRouter;