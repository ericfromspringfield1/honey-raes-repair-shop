import React, {useEffect, useState } from 'react';
import './Employees.css'



export const EmployeeList = () => {
    const [employees, assignEmployees] = useState([]) //useState returns an array and a function [employees is the array, assignEmployees or setEmployees is the function]

    useEffect(   // useEffect is like an Event Listener. It runs the code when the state changes
        () => {
            fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then((employeeArray) => {
                assignEmployees(employeeArray)
            })
        },
        []
    )
    
    return (
        <>
        <h1 className="employeesHeading">Employees</h1>
        {
            employees.map(
                 (employeeObject) => {
                    return <h2 key={`customer--${employeeObject.id}`} >{employeeObject.name}</h2>
                 }
            )
        }
        </>
    )
}