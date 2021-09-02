import React, { useEffect, useState } from "react"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    
    useEffect(
        () => {
            fetch("http://localhost:8081/serviceTickets?_expand=employee&_expand=customer")
            // fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    updateTickets(data)
                })
        },
        []
    )

    
    return (
        <>
                    <h1 className="customersHeading">Tickets</h1>

            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            <p>{ticket.description}</p>
                            <p>submitted by {ticket.customer.name}</p>
                            <p>and worked on by {ticket.employee.name}</p>
                        </div>
                        
                    }
                )
            }
        </>
    )
}