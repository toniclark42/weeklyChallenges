import React, { Component } from 'react';
import './App.css';
import Name from './Components/Name';
// import ContactList from './Components/ContactList';

//Highest level of application
class App extends Component {
//Setting initial state for the ContactList
  constructor() {
    //super allows you to use 'this'
    super();
    //.bind binds the context where 'this' works in two different scopes(components)
    this.updateStatus = this.updateStatus.bind(this);

    this.state = {
      contacts: [
        { status:'orange', firstname: 'Russel', lastname: 'Wilson', phonenumber:'222-222-2222'},
        { status:'orange', firstname: 'Richard', lastname: 'Sherman', phonenumber:'333-333-3333'},
        { status:'orange', firstname: 'Steven', lastname: 'Hauska', phonenumber:'444-444-4444'},
        { status:'orange', firstname: 'Marshawn', lastname: 'Lynch', phonenumber:'555-555-5555'},
      ]
    }
  }

  //VERY HARD: In your list of Contacts, have a status icon by each one that starts as orange "Pending" status. Then have a call button that when clicked, changes the state to a green "Done" status.


updateStatus(index) {
  //slice creates a copy of an array so it doesn't effect the original
  let allContacts = this.state.contacts.slice();

  //Terinary option for the if/else statement below
    //allContacts[index].status = allContacts[index].status === 'orange' ? 'green' : 'orange';

if (allContacts[index].status === 'orange') {
  allContacts[index].status = 'green';
} else {
  allContacts[index].status = 'orange';
}

  //Resets the state with the updated orange/green color
  this.setState({
    contacts: allContacts
  });
}

//render() sets up the DOM

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Name name="Alex" contacts={this.state.contacts} updateStatus={this.updateStatus}/>
        </header>
        
        {/* <p><Contact firstname="Alex" lastname="Rodriguez" phonenumber="1-111-111-1111" /></p> */}
      </div>
    );
  }



}






// class App extends Name {
//   render() {
//     return (
//       name: 
//     );
//   }
// }

export default App;
