import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function MyButton() {
  return (
    <>
    <button id="clicked()">{count}</button>
   <p>hello</p>
   </>
  );
}


function App() {
 const[count,setcount]=useState(0);

  return (
    <>
      
       
       <h1>welcome to my app</h1>
      <MyButton/>

       
        
      
    </>
  );
}

export default App
