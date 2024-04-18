import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





function App() {
 const[count,setCount]=useState(0);

 const increasecount=()=>{
  setCount(count+1);
 };
 const decreasecount=()=>{
  setCount(count-1);
 };


  return (
    <div className="App">
    <h1>count: {count}</h1>
      <button onClick={increasecount}>Increase</button>
       <button onClick={decreasecount}>Decrease</button>
       
</div>
       
        
      
    
  );
}

export default App;
