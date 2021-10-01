import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTickets } from '../APIManager'

const SearchResults = ({searchCustomerInput}) => {
  const [results, updateResults] = useState([])
  const [tickets, updateTickets] = useState([])

  useEffect(
      () => {
          getTickets()
              .then((ticketsArray) => {
                  updateTickets(ticketsArray)


              })

      }, []
  )
  

  useEffect(
      () => {
          if (searchCustomerInput !== "") {
              const foundTickets = tickets.filter(ticket => ticket?.description.toLowerCase().startsWith(searchCustomerInput.toLowerCase())|| ticket?.customer?.name.toLowerCase().startsWith(searchCustomerInput.toLowerCase()))
              if (foundTickets !== undefined) {
                updateResults(foundTickets)
              }
          } else {
              updateResults({})
          }
      },
      [searchCustomerInput]
  )



return (
  <>
  <h3>Search Results</h3>
  {
   results.length > 0 ? 
   results.map(result => {
     return <div key={`ticket--${result.id}`} className="ticketSearch">
       <h3><Link to={`/tickets/${result.id}`}>{result.description}</Link></h3>
       <div>
         <p>Ticket Description: {result.description}</p>
         <p>Customer Name: {result.customer.name}</p>
       </div>
     </div>
   })
   :
   ""
  }

  </>
)
}
  export default SearchResults