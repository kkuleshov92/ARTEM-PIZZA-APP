import { Outlet } from "react-router-dom";
import Header from "../containers/Header/Header";

const Home = () => {
  return (
    <>
      <Header/>

      <Outlet/>
    </>
  )
}

export default Home;