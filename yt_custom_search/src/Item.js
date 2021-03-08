import React from 'react'

const Item = ({ id, title, src }) => {
  
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
  };

  const displayHandler = (e) => {
    alert("The image source is :\n" + e);
  };

  return (
    <article>
      <h2 onClick={clickHandler}>{title}</h2>
      <img src={src} height="500" onClick={() => displayHandler(src)}></img>
    </article>
  );
};

export default Item
