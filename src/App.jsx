import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





function App() {
 const[count,setcount]=useState(0);

 const increase=()=>{
  setcount(count+2);
 }
 const decrease=()=>{
  setcount(count-2);
 }
  return (
    <>
      
       <h1>count={count}</h1>
       <button onClick={increase}>increase</button>
       <button onClick={decrease}>decrease</button>
      

       
        
      
    </>
  );
}

export default App
