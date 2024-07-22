import React, { useEffect, useState,useRef } from 'react';

const Btn = () => {
    let para = useRef("")
  const [count, setCount] = useState(0); 
  let [left,setLeft]= useState(0);

  function incrementCount ()  {
    para.current.style.backgroundColor="green";
    setCount(count + 1);
  };

  
  const decrementCount = () => {
    setCount(count - 1);
    
    para.current.style.backgroundColor="red";
  };

useEffect(()=>{
    console.log("hi")
},[])
  return (
    <div>
      <button onClick={decrementCount}>Decrement</button>
      <p ref={para}>{count}</p>
      <button onClick={incrementCount}>Increment</button>
     
    </div>
  );
};

export default Btn;
