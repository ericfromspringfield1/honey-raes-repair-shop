import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./tickets/TicketList"

export const ApplicationViews = () => {
    return (
        <>
        <Route exact path="/customers">
            <CustomerList />
        </Route>

        <Route exact path="/tickets">
            <TicketList />
        </Route>

        <Route exact path="/employees">
            <EmployeeList />
        </Route>
        </>
    )
}
