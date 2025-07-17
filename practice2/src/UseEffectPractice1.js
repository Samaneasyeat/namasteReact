import React from 'react';
import { useEffect } from 'react';

const UseEffectPractice1 = () => {
    useEffect(()=>{
        const IntervalId = setInterval(() => {
        console.log("Timer Running....")
       },1000);
       return()=>{
        clearInterval(IntervalId);
        console.log("unmounted");
       }
    },[])

  return (
    <div>This is Mount Component</div>
  )
}

export default UseEffectPractice1