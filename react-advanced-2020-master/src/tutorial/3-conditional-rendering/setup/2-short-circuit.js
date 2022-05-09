import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';


  return (<>
    {/* <h2>{firstValue}</h2>
  <h2>value : {secondValue}</h2> */}
    <h1>{text || 'jp'}</h1>
    <h1>{text && <h1>Hi</h1>}</h1>

    <button className="btn" onClick={() => setIsError(!isError)}>Toggle</button>
    {isError && <h1>Error ..</h1>}
    {isError ? <h1>Error ..</h1> : <h1>OK ..</h1>}
  </>);
};

export default ShortCircuit;
