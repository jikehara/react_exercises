import React from 'react';
import Data from './Data'

const ACME_App = () => {
  console.log(Data.customers);

  const MappedNames = Data.customers.map(function(customer, index) {
    return (
      <div key={index} className="acme-customers">
        <h3>{customer.name}</h3>
        <p>{customer.email}</p>
        <img src={customer.img} alt="dummy alt text" />
      </div>
    )
  })


  return (
    <div>
      <h1>{"ACME data!"}</h1>
      <div className="acme-container">
        <ul>
          {MappedNames}
        </ul>
      </div>
    </div>
  )
}

export default ACME_App;
