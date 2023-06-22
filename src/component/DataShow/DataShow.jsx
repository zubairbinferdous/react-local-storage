/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { removeItem, storage } from '../../utilities/storage';
import './DataShow.css';

const DataShow = (props) => {
    const {name , balance , id} = props.phone;

    const addToCart = (id) => {
       storage(id)
    }
    const remove = (id) => {
       removeItem(id)
    }
    
    return (
        <div className="" style={{border: "2px solid red" , margin:'40px'}}>
            <h2>this is phone name : {name }</h2>
            <h2>this is phone price : {balance }</h2>
            <p>this is id {id}</p>
            <button className='button' onClick={() => addToCart(id)}>add to cart</button>
            <button className='button' onClick={ () => remove(id)}>remove item</button>
        </div>
    
    );
};

export default DataShow;