import React from 'react';
import './menu-button_type_set-date.css';
import calendarLogo from '../../../../images/calendarlogo.png';

interface MenuButtonProps {
  children?: string;
}

export const SetDateButton: React.FC<MenuButtonProps> = ({ children }) => {

  return (
    <button className='menu-button menu-button_type_set-date'>
    <img src = {calendarLogo} className='calendar-logo'></img>
      <p className='menu-button_text'>{children}</p>
    </button>
);
}

export default SetDateButton;
