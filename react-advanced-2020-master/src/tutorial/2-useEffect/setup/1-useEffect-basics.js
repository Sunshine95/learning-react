import React, { useState, useEffect } from "react";

// by default runs after every re-render
// cleanup function
// second parameter

// useEffect is used when we want to change
// something outside of the component

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]); // re-render everytime any dependency changes

  useEffect(() => {
    console.log('initial render');
  }, []) // only runs on intial render


  const handleClick = () => {
    setValue((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        +
      </button>
    </>
  );
};

export default UseEffectBasics;
