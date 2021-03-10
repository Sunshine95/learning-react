import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import {reducer} from './reducer';

const initialState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [person, setPerson] = useState({ name: "" });
  const [state, dispatch] = useReducer(reducer, initialState);

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payLoad: { ...person, id: new Date().getTime().toString() },
    });

    setPerson({name:''})
  };

  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="person">Name:</label>
          <input
            type="text"
            id="person"
            name="person"
            placeholder="name"
            required
            autoFocus
            value={person.name}
            onChange={(e) =>
              setPerson({
                name: e.target.value,
              })
            }
          ></input>
        </div>
        <button type="submit" className="btn">
          Add Person
        </button>
      </form>

      {state.people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>{person.name}</h4>
            <button onClick={() => {
              dispatch({
                type:'REMOVE',
                payLoad:person,
              })
            }
              } >remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
