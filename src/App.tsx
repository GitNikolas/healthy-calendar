import React, { useEffect, useState } from 'react';
import './App.css';
import { Calendar } from './components/Calendar/Calendar';
import { Main } from './components/Main/Main';

function App() {

  const [selectedDate, selectDate] = useState(new Date());
  const [greenLine, setGreenLine] = useState<number[]>([]);
  const [yellowLine, setYellowLine] = useState<number[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  
  function toggleOpenCalendar () {
    setIsOpen(!isOpen);
  }

  return (
    <div className="app">
      <Calendar
      isOpen={isOpen}
      toggleOpenCalendar={toggleOpenCalendar}
      selectDate={selectDate}
      selectedDate={selectedDate}
      greenLine={greenLine}
      yellowLine={yellowLine}
      />
    <Main
    greenLine={greenLine}
    setGreenLine={setGreenLine}
    setYellowLine={setYellowLine}
    yellowLine={yellowLine}
    selectedDate={selectedDate}/>
    </div>
  );
}

export default App;
