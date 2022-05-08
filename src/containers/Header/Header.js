import React from 'react';

import SvgIcon from "../../components/SvgIcon/SvgIcon";
import logo from '../../assets/images/logo.svg';

import './Header.scss';


const Header = () => {
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
        </div>
    </header>
  )
}

export default Header;