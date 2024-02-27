import React, { useState } from 'react';
import './main.css';

export const Main = () => {


  return (
    <div className="main">
        <button className="main__button main__button_accepted">Выполнено</button>
        <button className="main__button main__button_in-progress">В процессе</button>
        <button className="main__button">Не приступил</button>
    </div>
);
}
