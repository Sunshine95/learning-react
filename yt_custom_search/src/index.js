import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

// CSS
// import './index.css';

import {items} from './itemsdata';
import Item from './Item';

function ItemList() {
  return (
    <div>
      {items.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </div>
  );
}

ReactDom.render(<ItemList />, document.getElementById("root"));
