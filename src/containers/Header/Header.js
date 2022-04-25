import React from 'react';

import logo from '../../assets/images/logo.svg';
import leftArrow from '../../assets/images/icons/account.svg';

import './Header.scss';


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <a href={window.location.origin}>
            <img src={logo} alt=""/>
          </a>

          <button className="button-link">
            <img src={leftArrow} alt=""/>

            <span>Мои заказы</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;