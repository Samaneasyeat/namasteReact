import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [listOfArray,setListOfArray] = useState([]);
  const [listItem , setListItem ] = useState("");
 function handleInputList(e){
  setListItem(e.target.value)
 }
 function updateList() {
  if (listItem.trim() === '') return; // optional: prevent empty item
  setListOfArray([...listOfArray, listItem]);
  setListItem(''); // clear input after adding
}
  return (
    <>
    <div className='App'>App</div>
    <p>listItem : {listItem}</p>
    <input
    value={listItem}
    onChange={handleInputList}/>
    <button onClick={updateList}>Add</button>
    <ul>
        {listOfArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
   </>
  )
}

export default App