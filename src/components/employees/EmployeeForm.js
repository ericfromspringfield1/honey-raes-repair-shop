import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'


export const EmployeeForm = () => {
    const history  = useHistory()

    const [employee, updateEmployee] = useState({
        name: "",
        specialty: ""
    })

    const submitEmployee = (evt) => {
        evt.preventDefault()
        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty,
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
        .then(response => response.json)
        .then(() => {
            history.push("/employees")
        })
    }
    
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input 
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="description"
                        className="form-control"
                        placeholder="Employee Name"
                        />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="description">Specialty:</label>
                    <input 
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.specialty = evt.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="description"
                        className="form-control"
                        placeholder="Employee Specialty"
                        />
                </div>
            <fieldset>
                <button onClick={submitEmployee} className="btn btn-primary">
                    Create Employee 
                </button>
            </fieldset>
            </fieldset>
        </form>

    )
}