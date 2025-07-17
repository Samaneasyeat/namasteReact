
//Create a Counter Component
import React, { useState  , useEffect} from 'react';
import './Practice.css';

const Practice = () => {
  const [inc, showInc] = useState(0);
  function handleIncrement(){
    showInc(inc + 1);
  }
  function handleDecrement(){
    showInc(inc -1);
  }
  useEffect(()=>{
    console.log("Count has been updated");

  },[inc])
  return (
    <>
    <div className='show-text'>the Number is : {inc}</div>
    <div className='Container'>
    <button onClick={handleIncrement} className='inc-btn'>Click For Increment</button>
    <button onClick={handleDecrement} className='dec-btn'>Click For Decrement</button>
    </div>
    </>
  )
}

export default Practice