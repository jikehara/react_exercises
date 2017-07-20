import React from 'react';

const Section = (props) => {
  return (
    <div className="section" role="presentation">
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
    </div>
  )
}

export default Section;
