import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value ,setValue]= useState(0);
  const complexIncrease=()=>{
    setTimeout(() => {
      setValue((preValue)=>{
            return (preValue+1)
      });
    },2000)
  }
  return (
  <>
   <h1> Regular Counter</h1>
   <h2>{value}</h2>
   <button className='btn' onClick={() =>setValue(value + 1)}>Increase</button>
   <button className='btn' onClick={() => setValue(0)}>Reset</button>
   <button className='btn' onClick={() => setValue(value -1)}>Decrease</button>
   <h1> Complex Counter</h1>
   <h2>{value}</h2>
   <button className='btn' onClick={() =>complexIncrease()}>Increase</button>
   
  </>);
};

export default UseStateCounter;
