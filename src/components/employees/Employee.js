import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const Employee = () => {
    const [employee, assignEmployee] = useState({})  // State variable for current employee object
    const { employeeId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then(assignEmployee)
        },
        [ employeeId ]  // Above function runs when the value of ticketId change
    )

    

    return (
        <>
            <h2>Employee Details for {employee?.name}</h2>
            <section className="employee">
                <h3 className="employee__name">Employee:{employee?.name}</h3>
                <h3 className="employee__specialty">Specialty:{employee?.specialty}</h3>
            </section>
        </>
    )
}