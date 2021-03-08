import React, { useState } from 'react';

const UseStateBasics = () => {
  
  const url = [
    "https://thumb-p8.xhcdn.com/a/91wRd0Be8vMga3nZzHIEvw/000/084/499/448_1000.jpg",
    "https://thumb-p2.xhcdn.com/a/R6M77sA2WUHWbEtRJJPq-Q/000/450/334/182_1000.jpg",
  ];

  let [urlno, setURL] = useState(0);

  const handleClick = () => {
    urlno = ((urlno+1)%2);
    setURL(urlno);  
  };

  return (
    <React.Fragment>
      <img src={url[urlno]} height='400'/><br />
      <button type='button' className='btn' onClick={handleClick}>
        Click!
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

