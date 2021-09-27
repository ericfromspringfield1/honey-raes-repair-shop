import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const [active, setActive] = useState("")
    const history = useHistory()
    
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    updateTickets(data)
                })
        },
        []
    )

    useEffect(() => {
        const activeTicketCount = tickets.filter(t => t.dateCompleted === "").length
        setActive(`There are ${activeTicketCount} open tickets`)
    },
    [tickets])

    
    return (
        <>
                    <h1 className="customersHeading">Tickets</h1>
                    <div>
                    <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
                    </div>
                    { active }
                    
            {
                tickets.map(
                    (ticket) => {
                    if (ticket.emergency === true){
                        return <div key={`ticket--${ticket.id}`} style={{backgroundColor: "pink"}}>
        
                            <p>{ticket.description}</p>
                            <p>submitted by {ticket.customer.name} and worked on by {ticket.employee.name}</p>
                        </div>
                        }else {
                            return <div key={`ticket--${ticket.id}`}>
        
                            <p>{ticket.description}</p>
                            <p>submitted by {ticket.customer.name} and worked on by {ticket.employee.name}</p>
                        </div>
                        }
                        
                    }
                )
            }
        </>
    )
}