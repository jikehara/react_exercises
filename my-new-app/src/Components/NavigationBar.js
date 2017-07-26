import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

  return (
    <div>
      <ul>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/WebApp'>Web App</Link> </li>
        <li> <Link to='/ChatApp'>Chat App</Link> </li>
        <li> <Link to='/ACME_App'>ACME App</Link> </li>
        <li> <Link to='/PlaygroundApp'>Playground App</Link> </li>
      </ul>
    </div>
  )

}

export default NavigationBar;
