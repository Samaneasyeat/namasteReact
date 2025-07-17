import React, { useEffect, useState } from 'react'

const UseEffectTimerPractice = () => {
    const [showText,setShowText ] = useState("");
    function handleInput(e){
        setShowText(e.target.value)
    }
    useEffect(()=>{
        console.log("show tewxt",showText);

    },[showText])
  return (
    <>
    <input type='text' onChange={handleInput}/>
    </>
  )
}

export default UseEffectTimerPractice