import {React,useState,useEffect} from 'react';
import './Timer.css';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(60);
    const [isRunning , setIsRunning] =useState(false);
    useEffect(()=>{
        let IntervalId;
        if(isRunning && timeLeft > 0)
        {
            IntervalId = setInterval(() => {
                setTimeLeft(prev=>prev-1)
            }, 1000);
        }
        return()=>{
            clearInterval(IntervalId)
        }

    },[timeLeft,isRunning])
     const handleStart=()=>setIsRunning(true);

     const handlePause = () => setIsRunning(false);
     const handleReset = () => {
       setIsRunning(false);
       setTimeLeft(60);
     };
   
  return (
    
   <>
   <div className= 'show-text' >Time Left: {timeLeft} seconds</div>
   <div className='Container'>
    <button className='inc-btn' onClick={handleStart}> Start </button>
    <button className='inc-btn' onClick={ handleReset}> Reset</button>
    <button className='inc-btn' onClick={handlePause}> Pause</button>
   </div>
   </>
  )
}

export default Timer