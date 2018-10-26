import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Astronaut from './Astronaut';
import axios from 'axios';



class App extends Component {
 state = {
   people: []
 }

 componentDidMount() {
  axios.get(`http://api.open-notify.org/astros.json`)
    .then(res => {
        const people = res.data.people;
        this.setState({ people });
        console.log(this.state);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Astronauts In Space</h1>
        </header>
        {this.state.people.map(({name, craft}, i) => {
          return <Astronaut key={i} name={name} craft={craft} />
        })}
      </div>
    );
  }
}

// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`http://api.open-notify.org/astros.json`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.persons.map(person => <li>{person.name}</li>)}
//       </ul>
//     )
//   }
// }


export default App;
