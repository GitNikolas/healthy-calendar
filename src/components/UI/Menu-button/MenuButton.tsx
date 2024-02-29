import React from 'react';
import './menu-button.css'

interface MenuButtonProps {
  children?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ children, onClick }) => {

  return (
    <button className='menu-button' onClick={onClick}>
      {children}
    </button>
);
}

export default MenuButton;
