export const reducer = (state, action) =>{
    if(action.type === 'ADD_ITEM')
    {
      const newPerson = [...state.people,action.payload]
      return {...state, 
        people: newPerson,
        isModalOpen: true,
        modalContent: 'item added',
      }
    }
    if(action.type === 'NO_VALUE'){
      return {...state, isModalOpen: true,modalContent: 'enter the value'}
    }
    if(action.type === 'CLOSE_MODAL'){
      return {...state, isModalOpen: false}
    }
    if(action.type === 'REMOVE_ITEM'){
      const newPerson = state.people.filter((person) => person.id !== action.payload)
  
      return {...state, people: newPerson ,isModalOpen: true,modalContent: 'item deleted'}
    }
    throw new Error('no action type');
  };