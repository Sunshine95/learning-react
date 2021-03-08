import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Robo",
    imageURL:
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/npc-2638654-2185729.png",
    age: 24,
    quote: "Hello human, what brings you here?",
  });

  const handleClick = () => {
    setPerson({ ...person, quote:'Farewell!'});
  }

  return (
    <>
      <h2>{person.name}</h2>
      <img src={person.imageURL} height="400"></img>
      <h4>{person.quote}</h4>
      <button type="button" className="btn" onClick={handleClick}>
        end conversation
      </button>
    </>
  );
};

export default UseStateObject;
