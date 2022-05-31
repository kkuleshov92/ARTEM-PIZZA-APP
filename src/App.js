import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Modals from "./components/Modals/Modals";
import { ModalProvider } from "./context/ModalContext";

import './styles/main.scss';
import { ROUTES } from "./config/constants";
import Login from "./pages/Login";
import OrderPage from "./pages/OrderPage";
import RequireAuth from "./hoc/RequireAuth";
import { AuthProvider } from "./context/AuthContext";
import Config from "./containers/Config/Config";
import Order from "./containers/Order";
import OrderList from "./containers/OrderList";


function App() {
  return (
    <ModalProvider>
      <AuthProvider>
        <Modals/>

        <Routes>
          <Route path={ROUTES.login} element={<Login/>}/>

          <Route path={ROUTES.home + "/*"} element={
            <RequireAuth>
              <OrderPage/>
            </RequireAuth>
          }>
            <Route path={ROUTES.constructor} element={<Config/>}/>
            <Route path={ROUTES.order} element={<Order/>}/>
            <Route path={ROUTES.orderList} element={<OrderList/>}/>
          </Route>

          <Route path="*" element={<Navigate to={ROUTES.home + '/' + ROUTES.constructor}/>}/>
        </Routes>
      </AuthProvider>
    </ModalProvider>
  );
}

export default App;
