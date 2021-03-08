import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

const items = [
  {
    id: 1,
    title: "Selena Gomez",
    src:
      "https://1.bp.blogspot.com/-TxsMHjHgQsM/XMvpzRlT3GI/AAAAAAACmt0/I-32IrF9XsIs58fBGq70z7i7ap-0pIYsQCLcBGAs/s1600/Selena-Gomez-Sexy-in-Red-Bra-1.jpg",
  },
  {
    id: 2,
    title: "Dua Lipa",
    src:
      "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2018/08/01/15331180949718.jpg",
  },
  {
    id: 3,
    title: "Camila Cabello",
    src:
      "https://i.dailymail.co.uk/i/newpix/2018/06/09/23/4D18162E00000578-0-image-a-187_1528582217475.jpg",
  },
  {
    id: 4,
    title: "Demi Lovato",
    src:
      "https://media1.popsugar-assets.com/files/thumbor/bU7LcP8p0LDUeuCrbgRJX22pWjs/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/07/19/947/n/44701584/8ba0c7c8e253e9fe_GettyImages-673024878/i/Sexy-Demi-Lovato-Pictures.jpg",
  },
];

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
