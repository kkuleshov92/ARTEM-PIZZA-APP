import React, { useCallback, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { CSSTransition } from "react-transition-group";

import { useAuthContext } from "./context/AuthContext";

import { ROUTES } from "./config/constants";

import Config from "./containers/Config/Config";
import Order from "./containers/Order";
import OrderList from "./containers/OrderList";
import Login from "./pages/Login";
import Header from "./containers/Header/Header";
import GlobalLoader from "./components/GlobalLoader";

const AppRouter = () => {
  const {
    user,
    handleAddUser,
  } = useAuthContext();

  const [isPending, setIsPending] = useState(true);

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
    }, 1000)
  }, [user])

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
        user
          ? (<>
              <Header/>

              <Routes>
                <Route path={ROUTES.constructor} element={<Config/>}/>
                <Route path={ROUTES.order} element={<Order/>}/>
                <Route path={ROUTES.orderList} element={<OrderList/>}/>
                <Route path="*" element={<Navigate to={ROUTES.constructor}/>}/>
              </Routes>
            </>
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