import React from 'react';
import Faker from 'faker';
import Counter from './Counter';
import UsersList from './UsersList';

// SMART/Container/STATE Data, no props

// DUMB/Presentational/Returns html/no state Data, only props


// smart component
class PlaygroundApp extends React.Component {

  // this has to be "state"
  state = {
    firstName: null,
    lastName: null,
    img: null,
    counter: 0,
    users: null,
    showCounter: true
  };

  // increaseCounter = this.increaseCounter.bind(this);
  // decreaseCounter = this.decreaseCounter.bind(this);

  componentDidMount() {
    this.fetchUsersFromServer();
  }

// all created functions will be = () =>
  fetchUsersFromServer = () => {
    // temp array to hold people
    // loop to create person and push into temp array
    // set state of users to temp array
    const peopleArray = [];
    for (let i=0; i<20; i+=1) {
      peopleArray.push({
        firstName: Faker.name.firstName(),
        lastName: Faker.name.lastName(),
        img: Faker.random.image()
      });
    }
    this.setState({users: peopleArray})
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

  updateFirstName = (event) => this.setState({firstName: event.target.value})

  updateLastName = (event) => this.setState({lastName: event.target.value})

  updateImg = (event) => this.setState({img: event.target.value})

  handleFormSubmit = (event) => {
    event.preventDefault();
    const person = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      img: this.state.img
    }
    let peopleArray = this.state.users;
    peopleArray.push(person);
    this.setState({users: peopleArray})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
        <input onChange={this.updateFirstName} />
        <input onChange={this.updateLastName} />
        <input onChange={this.updateImg} />
        <button type="submit" >SUBMIT</button>
        </form>

        {
          this.state.users
          ? <UsersList usersData={this.state.users}/>
          : <h1> Users loading </h1>
        }

        <button className={
          this.state.showCounter ? "open-btn" : "close-btn"
        } onClick={()=> this.toggleCounter()}> {this.state.showCounter ? "Close counter" : "Open Counter"}
        </button>

        {
          this.state.showCounter
          ? <Counter counter={this.state.counter}
            increaseCounter={this.increaseCounter}
            decreaseCounter={this.decreaseCounter} />
          : null
        }


      </div>
    )
  }
}

export default PlaygroundApp;
