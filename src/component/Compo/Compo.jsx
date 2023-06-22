/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { add, multi } from '../../utilities/calculate.js';
import DataShow from '../DataShow/DataShow.jsx';

const Compo = () => {
    const f = 44;
    const v = 50;
    const result = add( f , v );
    const bill = multi(f , v );

    // const phones = [
    //     { id:1, name:"alt_phone", price:4000}, 
    //     { id:2, name:"alt_pro", price:8000},
    //     { id:3, name:"alt_lite", price:5000},
    //     { id:4, name:"alt_vip", price:14000}
    
    // ]
    // const phones = [
    //     {
    //       "id": "649462fdcd113607af35c822",
    //       "balance": "$2,622.58",
    //       "name": "Marcie Middleton"
    //     },
    //     {
    //       "id": "649462fd4b4fa2ff215fb69c",
    //       "balance": "$1,885.00",
    //       "name": "Head Chan"
    //     },
    //     {
    //       "id": "649462fd3f4599c5b5bccf41",
    //       "balance": "$2,107.87",
    //       "name": "Joanna Leonard"
    //     },
    //     {
    //       "id": "649462fd415e3423049e63af",
    //       "balance": "$2,661.35",
    //       "name": "Myrtle Mckee"
    //     },
    //     {
    //       "id": "649462fd5f07b341f5942800",
    //       "balance": "$1,465.60",
    //       "name": "Chapman Hood"
    //     }
    //   ]

    const [phones , setPhones ] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPhones(data));
    })

    return (
        <div>
            <h1>hello this is ok</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus velit commodi fuga numquam ducimus facilis debitis asperiores dolore accusantium vitae, excepturi delectus molestias optio id expedita quasi!</p>
            <p>this is add : {result} </p>
            <p>this is multi : {bill} </p>
            <h1>this is all data about phone</h1>
            {
              phones.map(phone => <DataShow key={phone.id} phone={phone}></DataShow>)
            }
            
        </div>
    );
};

// const DataShow = (props) =>{

// }

export default Compo;