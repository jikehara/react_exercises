import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import App from './WebApp/App';
import ChatApp from './Chatter/ChatApp';
import ChatData from './Chatter/Data';
import ACME_App from './ACME_React/ACME_App';
import './style.css';
// Our router should navigate to home, ChatApp, numbermap, webapp

const Home = () => {
  return (
    <div>
      <h3>Hello from Home</h3>
    </div>
  )
}


ReactDOM.render((
  <Router>
    <div>
      <NavigationBar />

      <Route exact path='/' component={Home}/>
      <Route path='/WebApp' component={App} />
      <Route path='/ChatApp' component={ChatApp} />
      <Route path='/ACME_App' component={ACME_App} />

    </div>
  </Router>
), document.getElementById('root'));
