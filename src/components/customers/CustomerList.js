import React, {useEffect, useState } from 'react';
import './Customers.css'



export const CustomerList = () => {
    const [customers, assignCustomers] = useState([]) //useState returns an array and a function [customers is the array, assignCustomers or setCustomers is the function]

    useEffect(   // useEffect is like an Event Listener. It runs the code when the state changes
        () => {
            fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then((customerArray) => {
                assignCustomers(customerArray)
            })
        },
        []
    )
    
    return (
        <>
        <h1 className="customersHeading">Customers</h1>
        {
            customers.map(
                 (customerObject) => {
                    return <h2 key={`customer--${customerObject.id}`} >{customerObject.name}</h2>
                 }
            )
        }
        </>
    )
}