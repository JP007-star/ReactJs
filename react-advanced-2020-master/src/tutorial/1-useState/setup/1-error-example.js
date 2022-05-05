import React from 'react';

const ErrorExample = () => {
  let title="random title"
  const handleClick = () => {
    title='hi world';
    console.log(title);
  }
  return <>
      <h1>{title}</h1>
      <button className='btn' onClick={handleClick} > change title</button>
  </>;
};

export default ErrorExample;
