import React, { useState } from 'react';
import './header.css';
import MenuButton from '../UI/Menu-button/MenuButton';
import SetDateButton from '../UI/Menu-button/SetDateButton/SetDateButton';
import { formateDate } from '../../utils/date/formateDate';

interface HeaderProps {
  toggleOpenCalendar: Function;
  selectedDate: Date;
}

export const Header: React.FC<HeaderProps> = ({toggleOpenCalendar,selectedDate}) => {

  console.log(selectedDate);

  function toggleOpenCalendarHandler() {
    toggleOpenCalendar();
  }

  return (
    <div className="header">
      <div className="header__menu">
        <MenuButton>{'<'}</MenuButton>
        <SetDateButton onClick={toggleOpenCalendarHandler}>{formateDate(selectedDate,'DD.MM.YYYY')}</SetDateButton>
        <MenuButton>{'>'}</MenuButton>
      </div>
    </div>
);
}
