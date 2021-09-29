import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialties, setSpecial] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })},[])

    useEffect(() => {
        const justSpecialities = employees.map(employee => employee.specialty)
        setSpecial(justSpecialities.join(", "))
        console.log('justSpecialties state has done changed up in hurrr')

    }, [employees])
    

    return (
        <>
      <h1 className="customersHeading">Employees</h1>
      <div>
        <button onClick={() => history.push("/employees/create")}>
          Create Employee
        </button>
      </div>

            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`/employees/${employee.id}`}>{employee.name} - {employee.specialty}</Link></p>
                    }
                )
            }
        </>
    )
}