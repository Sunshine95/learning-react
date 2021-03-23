import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && email){
      const person = {id: new Date().getTime().toString() ,name, email};
      setPeople((people) => {
        return [...people, person];
      })

    }else{
      console.log('empty fields')
    }
  }
  
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <lable htmlFor='name'>Name:</lable>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className='form-control'>
          <lable htmlFor='email'>Email:</lable>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <button>Submit</button>
      </form>

      {
        people.map((person) => {
          const { id, name, email } = person;
          return (           
            <div className='item' key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          );
        })
      }
      
    </>
  );
  
};

export default ControlledInputs;
