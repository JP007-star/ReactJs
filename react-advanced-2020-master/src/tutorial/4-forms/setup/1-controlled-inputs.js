import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    if(firstName && email){
      const person={id:new Date().getTime().toString(), firstName, email}
      console.log(person);
      
      setPeople((people) =>{
        return [...people, person]
      })
      setFirstName('')
      setEmail('')
    }
    else{
      console.log("empty person");
    }
  }
  return (<>
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName"> Name: </label>
          <input
           type="text" 
           name="firstName" 
           id="firstName" 
           value={firstName} 
           onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="email"> Email: </label>
          <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary"> add person</button>
      </form>
      {
        people.map((person ,index) =>{
          const {id, firstName, email} =person
          return ( 
          <div key={id} className="item">
                <h2>{firstName}</h2>
                <p>{email}</p>
          </div>)
        })
      }
    </article>
  </>);
};

export default ControlledInputs;
