import React from 'react';
import './menu-button.css'

interface MenuButtonProps {
  children?: string;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ children }) => {

  return (
    <button className='menu-button'>
      {children}
    </button>
);
}

export default MenuButton;
