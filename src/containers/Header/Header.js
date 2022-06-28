import React from 'react';
import { getAuth, signOut } from "firebase/auth";

import SvgIcon from "../../components/SvgIcon/SvgIcon";
import logo from '../../assets/images/logo.svg';

import './Header.scss';
import { useAuthContext } from "../../context/AuthContext";


const Header = () => {
  const {
    handleAddUser,
  } = useAuthContext();

  const auth = getAuth();

  const logout = () => {
    signOut(auth)
      .then(() => {
        handleAddUser(null)
      })
      .catch(error => console.log(error))
  }
  return (
    <header className="header">
        <div className="header__wrapper">
          <a href={window.location.origin}>
            <img src={logo} alt=""/>
          </a>

          <button className="button-link">
            <SvgIcon
              icon="account"
              size={[16, 16]}
            />

            <span>Мои заказы</span>
          </button>

          <button onClick={logout}>
            Logout
          </button>
        </div>
    </header>
  )
}

export default Header;