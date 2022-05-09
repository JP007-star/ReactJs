import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsons';
const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => { 
        if(response.status >= 200 && response.status < 300){
          return response.json();
        }
        else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(response.statusText)
        }
      })
      .then((user) => {
        const {login}= user
        setUser(login)
        setIsLoading(false);
      })
      .catch((error) => console.log(error))
  }, [])
  if (isloading) {
    return (<>
      <h2>Loading ...</h2>
    </>);
  }
  if (isError) {
    return (<>
      <h2>Oops Something went wrong...</h2>
    </>);
  }
  return(<><h2>{user}</h2></>);
};

export default MultipleReturns;
