import React from 'react';
import Faker from 'faker';

// SMART/Container/STATE Data, no props

// DUMB/Presentational/Returns html/no state Data, only props


// // dumb component
// const PlaygroundApp = (props) => {
//
//
//   return (
//     <div>
//       <h1>Hello from playground</h1>
//     </div>
//   )
// }

const UsersList = (props) => {
  return (
    <div>
      <h1> Found user list: </h1>

      <ul>
        {
          props.usersData.map((user, index) => <li key={index}>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

const Counter = (props) => {
  return (
    <div>
      <h3>Counter: { props.counter }</h3>
      <button onClick={()=> props.increaseCounter()}>Increase Counter</button>
      <button onClick={()=> props.decreaseCounter()}>Decrease Counter</button>
    </div>
  )
}

// smart component
class PlaygroundApp extends React.Component {

  // this has to be "state"
  state = {
    name: "Joseph",
    counter: 0,
    users: null,
    showCounter: true
  };

  // increaseCounter = this.increaseCounter.bind(this);
  // decreaseCounter = this.decreaseCounter.bind(this);

  componentDidMount() {
    this.fetchUsersFromServer();
    console.log("Mounting app!");
    const randomName=Faker.name.firstName();
    const someproduct = Faker.commerce.product();
    console.log(someproduct);
  }

  fetchUsersFromServer() {
    // pretend it's an ajax function
    const users = [
      {name: "Doug", id:1},
      {name: "Sean", id:2},
      {name: "Karsten", id:3},
      {name: "Emily", id:4}
    ]

    setTimeout(() => {
      this.setState({ users })
    }, 3000);
  }

  // = () => {} does binding automatically
  increaseCounter = () => {
    this.setState({counter: this.state.counter += 1})
  }

  decreaseCounter = () => {
    this.setState({counter: this.state.counter -= 1})
  }

  toggleCounter = () => {
    this.setState({showCounter: !this.state.showCounter})
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button className={
          this.state.showCounter ? "open-btn" : "close-btn"
        }

          onClick={()=> this.toggleCounter()}> {this.state.showCounter ? "Close counter" : "Open Counter"}
        </button>

        {
          this.state.showCounter
          ? <Counter counter={this.state.counter}
            increaseCounter={this.increaseCounter}
            decreaseCounter={this.decreaseCounter} />
          : null
        }

        {
          this.state.users
          ? <UsersList usersData={this.state.users}/>
          : <h1> Users loading </h1>
        }
      </div>
    )
  }
}



export default PlaygroundApp;
