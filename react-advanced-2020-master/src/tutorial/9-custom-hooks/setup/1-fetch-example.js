import React from "react";
import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// const Products = ({ products }) => {
//   return (
//     <>
//       {products.map((product) => {
//         console.log(product.fields.image[0].url)
//         return (
//           <div className="item">
//             <h4 >{product.fields.name}</h4>
//             <h6>{product.fields.company}</h6>
//             <img src={product.fields.image[0].thumbnails.small.url} ></img>
//             <p>{product.fields.price}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// };

const Example = () => {
  const { loading, products } = useFetch(url);
  return (
    <div>
      <h2>{loading ? "loading..." : "DATA" }</h2>
    </div>
  );
};

export default Example;
