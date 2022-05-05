import React, { useState } from 'react';

const UseStateBasics = () => {
  
   // console.log(useState("jp"));
    //const value =useState()[0]
   // const handler =useState()[1]
   // console.log(value,handler);
   const [text,setText]=useState('random title');
   const handleClick = () => {
     if(text === 'random title'){
       setText("jp");
     }
     else{
     setText("random title");
     }
   }

 
  return (
  <>
    <h1>{text}</h1>
    <button className="btn" type="button"  onClick={handleClick}>
      CLICK HERE
    </button>

  </>
  )
};

export default UseStateBasics;
