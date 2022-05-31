import Header from "../containers/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";


const OrderPage = () => {
  console.log('order-page')
  return (
    <>
      <Header/>

      <Outlet/>
    </>
  )
}

export default OrderPage;