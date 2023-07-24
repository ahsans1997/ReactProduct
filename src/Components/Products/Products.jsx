import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    const handelCartButton = (product) => {
        console.log(product);
    }

    useEffect( () => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProducts(data.products));
    } ,[])
    return (
        <div className='products'>
            <h3>Total Product = {products.length}</h3>
            {
                products.map(product => <Product key={product.id} handelCartButton={handelCartButton} product={product} />)
            }
        </div>
    );
};

export default Products;