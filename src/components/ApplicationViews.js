import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./tickets/TicketList"
import { TicketForm } from "./tickets/TicketForm"

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

        <Route exact path="/tickets/create">
            <TicketForm />
        </Route>

        <Route exact path="/employees">
            <EmployeeList />
        </Route>
        </>
    )
}
