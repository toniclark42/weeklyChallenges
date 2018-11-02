import React, { Component } from 'react';
import Astronaut from './Astronaut';
import axios from 'axios';
import './App.css';



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
        
          <h1 className="App-title">Astronauts In Space</h1>
        
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
