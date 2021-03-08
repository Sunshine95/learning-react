import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  
  const [people, setPeople] = React.useState(data);

  const handleClick = (id) => {
    setPeople(people.filter((person) => {
      return person.id != id;
    }))
  }

  return (
    <>
      {people.map(({ id, name }) => {
        return (
          <div key={id} className='item'>
            <p>{name}</p>
            <button type='button' onClick={() => handleClick(id)} >Remove</button>
          </div>
        );
      })}
      <button type='button' className='btn' onClick={() => setPeople([])}>Clear List</button>
    </>
  );
};

export default UseStateArray;
