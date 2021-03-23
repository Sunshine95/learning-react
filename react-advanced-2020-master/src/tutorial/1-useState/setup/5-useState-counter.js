import React, { useState } from "react";

const UseStateCounter = () => {
  const initialValue = 0;
  const [value, setValue] = useState(initialValue);

  const complexIncrement = () => {
    setTimeout(() => {
      // console.log("click " + value)
      setValue((prevState) => {
        // console.log('inside-click ' + prevState)
        return prevState + 1;
      })
    }, 2000);
  };

  return (
    <>
      <section style={{margin:'10rem 0'}}>
        <h3>Counter</h3>
        <h1>{value}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value - 1)}
        >
          Decrement
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(initialValue)}
        >
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value + 1)}
        >
          Increment
        </button>
      </section>

      <section>
        <h3>Complex Counter</h3>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={complexIncrement}>
          Timed Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
