import React, { useState } from 'react';
import './App.css';
import { Calendar } from './components/Calendar/Calendar';
import { Main } from './components/Main/Main';

function App() {

  const [selectedDate, selectDate] = React.useState(new Date());

  const [isOpen, setIsOpen] = useState(false);

  function toggleOpenCalendar () {
    setIsOpen(!isOpen);
  }

  return (
    <div className="app">
      <Calendar isOpen={isOpen} toggleOpenCalendar={toggleOpenCalendar} selectDate={selectDate} selectedDate={selectedDate}/>
      <Main />
    </div>
  );
}

export default App;
