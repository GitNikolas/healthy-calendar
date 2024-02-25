import React, { useState } from 'react';
import './header.css';
import MenuButton from '../UI/Menu-button/MenuButton';
import SetDateButton from '../UI/Menu-button/SetDateButton/SetDateButton';

function Header() {


  return (
    <div className="header">
      <div className="header__menu">
        <MenuButton>{'<'}</MenuButton>
        <SetDateButton>24 марта</SetDateButton>
        <MenuButton>{'>'}</MenuButton>
      </div>
    </div>
);
}

export default Header;
