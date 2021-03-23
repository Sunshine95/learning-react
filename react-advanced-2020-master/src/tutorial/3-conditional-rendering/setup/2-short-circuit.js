import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [val, setVal] = useState(true)

  return (
    <>
      <div class="item">
        {val ? (
          <img 
            src="https://thumb-p8.xhcdn.com/a/91wRd0Be8vMga3nZzHIEvw/000/084/499/448_1000.jpg"
            alt="true"
            className="product"
          ></img>
        ) : (
          <img
            src="https://thumb-p2.xhcdn.com/a/R6M77sA2WUHWbEtRJJPq-Q/000/450/334/182_1000.jpg"
            alt="false"
            className="product"
          ></img>
        )}
      </div>
      <button className="btn" onClick={() => setVal(!val)}>
        Toggle!
      </button>
    </>
  );
};

export default ShortCircuit;
