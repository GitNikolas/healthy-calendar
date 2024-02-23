import React, { useState } from 'react';
import './App.css';
import { Calendar } from './components/Calendar/Calendar';

function App() {

  const [selectedDate, selectDate] = React.useState(new Date())

  // async function createPost(data:string){
  //   let response = await fetch('http://localhost:3001/posts', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({data})
  //   })
  //   let res = await response.json()
  //   console.log(res);
  // }



  // function test2(event: React.ChangeEvent<HTMLInputElement>) {
  //   setString(event.target.value);
  // }

  return (
    <div className="App">
      <h1>Питание 11.03</h1>
      {/* <input onChange={test2}></input> */}
      <Calendar selectDate={selectDate} selectedDate={selectedDate}/>
    </div>
  );
}

export default App;
