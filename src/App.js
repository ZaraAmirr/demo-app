import './App.css';
import React, { useState } from 'react';
import {Message} from './Message.js';


export default function App() {

  let [count, setCount] = useState(0);

  let [isMorning, setMorning] = useState(false);

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter={count}/>
      <br />
      <button id='button'
        onClick={() => setCount(++count)}>Changed</button>
          <button id='button' onClick={ () => setMorning(!isMorning)}>Update</button>
    </div>
  )
}

 