import Header from "../containers/Header/Header";
import { Outlet } from "react-router-dom";


const OrderPage = () => {
  return (
    <>
      <Header/>

      <Outlet/>
    </>
  )
}

export default OrderPage;