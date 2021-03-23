import React from 'react';
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({name, image, price}) => {
  
  const url = image && image.url;
  return <article className='product'>
    <img src={url || defaultImage}></img>
    <h4>{name || 'default'}</h4>
    <p>{price || 3.99}</p>
    </article>;
};



export default Product;
