import React, { useEffect, useState } from 'react';
import './main.css';
import { createDate } from '../../utils/date/createDate';

interface MainProps {
  selectedDate: Date;
  greenLine: number[];
  yellowLine: number[];
  setGreenLine: React.Dispatch<React.SetStateAction<number[]>>;
  setYellowLine: React.Dispatch<React.SetStateAction<number[]>>;
}

export const Main: React.FC<MainProps> = ({ setGreenLine, setYellowLine, greenLine, yellowLine, selectedDate }) => {

  const [selectedDateTimestamp, setSelectedDateTimestamp] = useState(0);
  const [day, setDay] = useState<{timestamp:number}>({timestamp:0});


  useEffect(() => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const date = selectedDate.getDate();
    const day = createDate({date: new Date(year, month, date)});
    setDay(day);
    setSelectedDateTimestamp(day.timestamp);
    } , [selectedDate])

  function pushGreenTimestamp () {
    let checkUnderlining = greenLine.includes(day.timestamp);

    if(checkUnderlining) {
      setGreenLine(state => state.filter(i => i !== selectedDateTimestamp));
    } else {
      setGreenLine(state => [...state, selectedDateTimestamp]);
    }
 }

 function pushYellowTimestamp () {
  let checkUnderlining = yellowLine.includes(day.timestamp);
  if(checkUnderlining) {
    setYellowLine(state => state.filter(i => i !== selectedDateTimestamp));
  } else {
    setYellowLine(state => [...state, selectedDateTimestamp]);
  }
}

  if(greenLine.includes(selectedDateTimestamp)) {
    return (
      <div className="main">
          <button className="main__button main__button_accepted" onClick={pushGreenTimestamp}>Выполнено</button>
      </div>
  );
  }
    if(yellowLine.includes(selectedDateTimestamp)) {
      return (
        <div className="main">
          <button className="main__button main__button_in-progress" onClick={pushYellowTimestamp}>В процессе</button>
        </div>
      )
    } else {
      return (
        <div className="main">
          <button className="main__button main__button_accepted" onClick={pushGreenTimestamp}>Выполнено</button>
          <button className="main__button main__button_in-progress" onClick={pushYellowTimestamp}>В процессе</button>
          <button className="main__button">Не приступил</button>
        </div>
      )
    }
}
