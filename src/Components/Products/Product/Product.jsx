import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {id, title, description, price} = props.product;
    return (
        <div className='product'>
            <h4>Id = {id} </h4>
            <h3>Name = {title}</h3>
            <p>Description = {description} </p>
            <h4>Price ={price} </h4>
            <button type='button' onClick={()=> props.handelCartButton(props.product)}>Add To Cart</button>
        </div>
    );
};

export default Product;