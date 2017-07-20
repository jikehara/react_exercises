import React from 'react';

const NamesList = (props) => {
  const nameItems  = props.names
    .filter(function(name) {
      return name.length === 4
    })
    .map(function(name, index) {
      return <li key={index}>{name}</li>
    });

  return (
    <div>
      <h3>Names</h3>
      <ul>
        {nameItems}
      </ul>
    </div>
  )

}

const NumbersOver30Under70 = (props) => {
  const newNums = props.numbers
  .filter(function(num) {
    return num<70 && num>30;
  })
  .map(function(num, index) {
    return <li key={index}>{num}</li>
  })

  return (
    <div>
      <ul>
        {newNums}
      </ul>
    </div>
  )
}

const Books = (props) => {

  const Book= props.books.map(function(book, index) {
    return (
      <div key={index}>
        <h3>{book.title}</h3>
        <h5>written by {book.author}</h5>
      </div>
    )
  })

  return (
    <div>
      {Book}
    </div>
  )
}

const MappingAndFiltering = (props) => {

  // const testing = "hello";

  // var nameItems = props.allData.names
  // .filter(function(name) {
  //   return name.length === 4;
  // })
  // .map(function(name) {
  //   return <li>{name}</li>
  // });

  return (
    <div>
      <h1>{props.title}</h1>
      <NamesList names={props.allData.names} />
      <NumbersOver30Under70 numbers={props.allData.numbers}/>
      <Books books={props.allData.books} />
    </div>
  )
}

export default MappingAndFiltering;
