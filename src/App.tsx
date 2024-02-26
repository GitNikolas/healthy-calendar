import React, { useState } from 'react';
import './App.css';
import { Calendar } from './components/Calendar/Calendar';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

function App() {

  const [selectedDate, selectDate] = React.useState(new Date());

  const [isOpen, setIsOpen] = useState(false);

  function toggleOpenCalendar () {
    setIsOpen(!isOpen);
  }

  return (
    <div className="app">
      <Header toggleOpenCalendar={toggleOpenCalendar}/>
      <Main />
      <Calendar isOpen={isOpen} toggleOpenCalendar={toggleOpenCalendar} selectDate={selectDate} selectedDate={selectedDate}/>
    </div>
  );
}

export default App;
