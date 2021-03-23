import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer);
  };
  
  useEffect(() => {
    refContainer.current.focus();
  }, []);

  return (
    <>
      <form className="form" name="searchForm" onSubmit={handleSubmit}>
        <div>
          <lable htmlFor="query"></lable>
          <input
            type="text"
            id="query"
            name="query"
            placeholder="Search"
            ref={refContainer}
            style={{margin:'5px'}}
          ></input>
          <button type="submit">Search</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
