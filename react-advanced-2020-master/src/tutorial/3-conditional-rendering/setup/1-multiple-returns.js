import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/Sunshine95";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default User');

  useEffect(
    () => {
      setIsLoading(true)
      fetch(url)
        .then((response) => {
          console.log(response.status)
          if(response.status == 200){
            return response.json();
          }
          else{
            setIsLoading(false);
            setIsError(true);
            throw new Error(response.statusText);
          }          
        })
        .then((user) => {
          console.log(user)
          const { login } = user;
          
          setUser(login);
          setIsLoading(false);
        })
        .catch((error) => console.log(error))
    },[]);

  if (isLoading) {
    return (
      <>
        <div>
          <h1>Loading...</h1>
        </div>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <div>
          <h1>Error</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>{user}</h1>
      </div>
    </>
  );
};

export default MultipleReturns;
