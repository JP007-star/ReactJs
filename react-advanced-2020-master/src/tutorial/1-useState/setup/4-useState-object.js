import React, { useState } from 'react';

const UseStateObject = () => {
  const [people, setPeople]= useState({ name:'jp',age:20,message:'random message'});
  const changeMeassage = ()=>{
      setPeople({ ...people ,message:'hi jp'});
  }
  return (
  <>
   <h2>{people.name}</h2>
   <h2>{people.age}</h2>
   <h2>{people.message}</h2>

   <button className="btn btn-danger" onClick={() =>changeMeassage()}> changeMeassage</button>
  </>);
};

export default UseStateObject;
