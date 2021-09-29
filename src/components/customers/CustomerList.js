import React, {useEffect, useState } from 'react';
import './Customers.css'
import { getAllCustomers } from "../ApiManager"



export const CustomerList = () => {
    const [customers, setCustomers] = useState([]) //useState returns an array and a function [customers is the array, assignCustomers or setCustomers is the function]
    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(   // useEffect is like an Event Listener. It runs the code when the state changes
        () => {
            getAllCustomers()
            .then((customerArray) => {
                setCustomers(customerArray)
            })
        },
        []
    )

    useEffect(
        () => {
            console.log("Customers state changed", customers)
            if (customers.length === 1) {
                updateMessage("You have 1 customer")
            } else {
                updateMessage(`You have ${customers.length} customers`)
            }
        },
        [customers]
    )
    
    return (
        <>
            <div>{ totalCustomerMessage }</div>
            <h1 className="customersHeading">Customers</h1>
        {
            customers.slice(0, 5).map(
                 (customerObject) => {
                    return <p key={`customer--${customerObject.id}`} >{customerObject.name}</p>
                 }
            )
        }
        </>
    )
}