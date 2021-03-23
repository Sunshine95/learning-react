import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => {
        return person.id !== id;
      });
    });
  };

  return (
    <>
      <h2>Prop Drilling</h2>
      <List people={people} removePerson={removePerson} />
    </>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return <Person person={person} removePerson={removePerson} />;
      })}
    </>
  );
};

const Person = ({ person, removePerson }) => {
  const { id, name } = person;
  return (
    <>
      <div key={id} className="item">
        <h4>{name}</h4>
        <button type="button" onClick={() => removePerson(id)}>remove</button>
      </div>
    </>
  );
};

export default PropDrilling;
