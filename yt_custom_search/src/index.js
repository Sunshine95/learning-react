import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

// CSS
// import './index.css';

import {items} from './items';

function ItemList() {
  return (
    <div>
      {items.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </div>
  );
}

var Item = ({ id, title, src }) => {
  
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    console.log("Clicked " + title);
  };

  const displayHandler = (e) => {
    alert("The image source is :\n" + e);
  }

  return (
    <article>
      <h2 onClick={clickHandler} >{title}</h2>
      <img src={src} height="500" onClick={() => displayHandler(src)}></img>
    </article>
  );
};

ReactDom.render(<ItemList />, document.getElementById("root"));
