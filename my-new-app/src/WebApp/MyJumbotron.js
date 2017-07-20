import React from 'react';

const MyJumbotron = (props) => {
  return (
    <div className="my-jumbotron">
      <h3>{props.header}</h3>
      <p>Thanks, react</p>
    </div>
  )
}

export default MyJumbotron;
