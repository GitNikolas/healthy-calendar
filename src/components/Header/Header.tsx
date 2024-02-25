import React, { useState } from 'react';
import './header.css';
import MenuButton from '../UI/Menu-button/MenuButton';
import SetDateButton from '../UI/Menu-button/SetDateButton/SetDateButton';

interface HeaderProps {
  toggleOpenCalendar: Function;
}

export const Header: React.FC<HeaderProps> = ({toggleOpenCalendar}) => {

  function toggleOpenCalendarHandler(event:any) {
    event.stopPropagation();
    toggleOpenCalendar();
  }

  return (
    <div className="header">
      <div className="header__menu">
        <MenuButton>{'<'}</MenuButton>
        <SetDateButton onClick={toggleOpenCalendarHandler}>24 марта</SetDateButton>
        <MenuButton>{'>'}</MenuButton>
      </div>
    </div>
);
}
