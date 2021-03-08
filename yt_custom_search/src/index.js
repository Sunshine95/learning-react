import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

const items = [
  {
    title: "Selena Gomez",
    src:
      "https://1.bp.blogspot.com/-TxsMHjHgQsM/XMvpzRlT3GI/AAAAAAACmt0/I-32IrF9XsIs58fBGq70z7i7ap-0pIYsQCLcBGAs/s1600/Selena-Gomez-Sexy-in-Red-Bra-1.jpg",
  },
  {
    title: "Dua Lipa",
    src:
      "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2018/08/01/15331180949718.jpg",
  },
  {
    title: "Camila Cabello",
    src:
      "https://i.dailymail.co.uk/i/newpix/2018/06/09/23/4D18162E00000578-0-image-a-187_1528582217475.jpg",
  },
  {
    title: "Demi Lovato",
    src:
      "https://media1.popsugar-assets.com/files/thumbor/bU7LcP8p0LDUeuCrbgRJX22pWjs/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/07/19/947/n/44701584/8ba0c7c8e253e9fe_GettyImages-673024878/i/Sexy-Demi-Lovato-Pictures.jpg",
  },
];

function ItemList() {
  return (
    <div>
      { items.map((item) => {
        console.log(item);
        return <Item item={item}/>
      })}
    </div>
  );
}

var Item = (props) => {
  const {title, src} = props.item; 
  return (
    <article>
      <h2>{title}</h2>
      <img src={src} height="420"></img>;
    </article>
  );
};

ReactDom.render(<ItemList />, document.getElementById("root"));
