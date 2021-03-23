import { useState, useEffect } from 'react';

export const useFetch = (url) => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
      fetch(url)
        .then((response) => {
            if(response.status === 200){
                return response.json();
            }
            else{
                throw new Error(response.statusText);
            }
        })
        .then((products) =>{
            setLoading(false);
            setProducts(products);
        })
        .catch((error) => console.log(error))
    }

    useEffect(()=> {
        getProducts();

    }, [url]);


    return {loading, products};
};
