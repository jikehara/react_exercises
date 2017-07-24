// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './WebApp/App';
// import Data from './data';
// import MappingAndFiltering from './MappingAndFiltering';
// import ChatApp from './Chatter/ChatApp';
// import ChatData from './Chatter/Data';
// import './style.css';
//
// // ReactDOM.render(<App />, document.getElementById('root'))
// // ReactDOM.render(
// //   <MappingAndFiltering
// //     title={"Maps WOOOO"}
// //     allData={Data}/>,
// //   document.getElementById('root'));
//
// ReactDOM.render(<ChatApp
//   data={ChatData}/>, document.getElementById('root'))


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Our router should navigate to home, ChatApp, numbermap, webapp

const Home = () => {
  return (
    <div>
      <h3>Hello from Home</h3>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h3>Hello from About</h3>
    </div>
  )
}

const Blog = () => {
  return (
    <div>
      <h3>Hello from Blog</h3>
    </div>
  )
}



ReactDOM.render((
  <Router>
    <div>
      <ul>
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/About'>About</Link></li>
        <li> <Link to='/Blog'>Blog</Link></li>
      </ul>

      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/blog' component={Blog}/>

    </div>
  </Router>
), document.getElementById('root'));
