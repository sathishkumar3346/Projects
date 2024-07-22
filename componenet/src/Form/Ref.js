import React, { useState, useRef } from 'react';
import './Bill.css';

const Ref = () => {
    let box = useRef();
    let bor =useRef();
    let [left, setLeft] = useState(0);
    let [moveCount,setMoveCount]=useState(0);
    let[move,setMove]=useState(0)
    let [top,setTop]= useState(0);

    const moveLeft = () => {
      if (moveCount >=  1) {
        setLeft(left - 10); 
        setMoveCount(moveCount - 1);
    };
  }
    const moveRight = () => {
      if(moveCount < 9){
        setLeft(left + 10); 
        setMoveCount(moveCount + 1);
      }
        
    };
    const moveTop = () => {
      if(move >= 1){
        setTop(top - 10); 
        setMove(move - 1);
      }
        
    };
    const moveBottom= () => {
      if(move < 9){
        setTop(top + 10); 
        setMove(move + 1);
      }
        
    };
      if(bor.current){
        bor.current.style.border='2px solid red'
        bor.current.style.width='50%'
        bor.current.style.height='460px'
      }
    return (
        <div>
            <div ref={bor}>
                <div ref={box} style={{ position: 'relative', left: `${left}%` , top: `${top}%`}}  className='ami'>
                  Box
                </div>
            </div>
            <button onClick={moveLeft}>Left</button>
            <button onClick={moveRight}>Right</button>
            <button onClick={moveTop}>Top</button>
            <button onClick={moveBottom}>bottom</button>
        </div>
    );
}

export default Ref;
