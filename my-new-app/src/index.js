import React from 'react';
import ReactDOM from 'react-dom';
import App from './WebApp/App';
import Data from './data';
import MappingAndFiltering from './MappingAndFiltering'
import './style.css';

ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(
//   <MappingAndFiltering
//     title={"Maps WOOOO"}
//     allData={Data}/>,
//   document.getElementById('root'));
