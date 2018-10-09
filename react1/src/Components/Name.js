import React from 'react';
import ContactList from './ContactList';

//VERY EASY: Create a React class component that renders "hello world" in an h1 tag. You don't need props for this one.
//EASY:  Pass a prop for "name" into the component you just created so the h1 tag reads, "Hello world, {name}"

export default function Name(props) {
    return (
      <div className="nameCard">
        <h1>Hello World, {props.name}</h1>
        <div>
          <ContactList contacts={props.contacts} updateStatus={props.updateStatus} />
        </div>
      </div>
    );
  }


