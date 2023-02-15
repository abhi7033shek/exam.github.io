import React from 'react'
import { useState } from 'react';


export default function App() {
    const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let color = "black";
  if (count >= 0 && count <= 4) {
    color = "green";
  } else if (count >= 5 && count <= 9) {
    color = "blue";
  } else if (count === 10) {
    color = "red";
  }
  return (
    <div>
        
       <h1 style={{ color }}>{count}</h1>
       <div >
       <button  onClick={handleIncrement}>Increment</button>
       <button  onClick={handleDecrement}>Decrement</button>
    </div>
     </div>
    
  )
}
