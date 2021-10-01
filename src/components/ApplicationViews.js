import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { Employee } from "./employees/Employee"
import { TicketList } from "./tickets/TicketList"
import { TicketForm } from "./tickets/TicketForm"
import { Ticket } from "./tickets/Ticket"
import { EmployeeForm } from "./employees/EmployeeForm"
import Search from "./search/Search"


export const ApplicationViews = () => {
    return (
        <>
        <Route exact path="/">
            <CustomerList />
        </Route>

        <Route exact path="/customers">
            <CustomerList />
        </Route>

        <Route exact path="/tickets">
            <TicketList />
        </Route>

        <Route exact path="/tickets/:ticketId(\d+)"> 
            <Ticket />
        </Route>

        <Route exact path="/tickets/create">
            <TicketForm />
        </Route>

        <Route exact path="/employees">
            <EmployeeList />
        </Route>

        <Route exact path="/employees/:employeeId(\d+)">
            <Employee />
        </Route>

        <Route exact path="/employees/create">
            <EmployeeForm />
        </Route>

        <Route exact path="/search">
            <Search />
        </Route>

        
        </>

        
    )
}
