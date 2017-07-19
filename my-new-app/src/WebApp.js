import React from 'react';
import ReactDOM from 'react-dom';

const NavBar = (props) => {
  return (
    <nav className='nav'>
      <ul className='nav-item-container'>
        {
          props.navLinks.map(function(item) {
            return <li>{item}</li>
          })
        }
      </ul>
    </nav>
  )
}

const MyJumbotron = (props) => {
  return (
    <div className="my-jumbotron">
      <h3>{props.header}</h3>
      <p>Thanks, react</p>
    </div>
  )
}

const Section = (props) => {
  return (
    <div className="section">
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
    </div>
  )
}

const WebApp = (props) => {
  return (
    <div className='app-container'>

      <NavBar navLinks={["Home","About","Contact","Blog"]} />
      <MyJumbotron header={"Super Awesome Web App"} />
      <Section header={"Lorem Ipsum 1"} paragraph={"From http://www.lipsum.com/ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
      <Section header={"Lorem Ipsum 2"} paragraph={"From http://www.lipsum.com/ It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."} />


    </div>
  )
}



export default WebApp;
