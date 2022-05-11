import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import {reducer} from './reducer'
// reducer function

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};
const Index = () => {
  const [name,setName]= useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
       const newItem={id: new Date().getTime().toString(),name:name}
       dispatch({ type: 'ADD_ITEM', payload: newItem})
       setName('')
    }
    else{
      dispatch({ type: 'NO_VALUE'})
     
    }
  }
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL'})
  }
  return (<>
  {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
  <form className="form" onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value);}} />
      <button type='submit' className='btn' >add</button>
  </form>
  {
    state.people.map((person)=>{
          return(
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button  onClick={() =>{dispatch({type: 'REMOVE_ITEM',payload: person.id})}}> remove</button>
          </div>)
    })
  }
  </>);
}; 

export default Index;
