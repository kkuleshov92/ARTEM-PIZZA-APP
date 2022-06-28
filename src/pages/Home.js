import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../containers/Header/Header";
import { ROUTES } from "../config/constants";
import Config from "../containers/Config/Config";
import Order from "../containers/Order";
import OrderList from "../containers/OrderList";

const Home = () => {
  return (
    <>
      <Header/>

      <Routes>
        <Route index element={<Config/>}/>
        <Route path={ROUTES.order} element={<Order/>}/>
        <Route path={ROUTES.orderList} element={<OrderList/>}/>

        <Route path="*" element={<Navigate to={ROUTES.home} replace/>} />
      </Routes>
    </>
  )
}

export default Home;