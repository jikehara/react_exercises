import React from 'react';

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

// smart component
class PlaygroundApp extends React.Component {

  state = {
    name: "Joseph",
    counter: 0,
    users: null
  };

  componentDidMount() {
    this.fetchUsersFromServer();
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

  increaseCounter() {
    this.setState({counter: this.state.counter += 1})
  }

  decreaseCounter() {
    this.setState({counter: this.state.counter -= 1})
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={()=> this.increaseCounter()}>Increase Counter</button>
        <button onClick={()=> this.decreaseCounter()}>Decrease Counter</button>
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
