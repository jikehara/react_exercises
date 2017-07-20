import React from 'react';
import ReactDOM from 'react-dom';
// import WebApp from './WebApp';
import Data from './data';
import MappingAndFiltering from './MappingAndFiltering'
import './style.css';

// ReactDOM.render(<WebApp/>, document.getElementById('root'))
ReactDOM.render(
  <MappingAndFiltering
    title={"Maps WOOOO"}
    allData={Data}/>,
  document.getElementById('root'));
