import React from 'react';
import Contact from './Contact';

//MEDIUM: Create a child Contact component inside the original component you created that you pass in a firstName, lastName, and phoneNumber and print out "You need to contact {firstName} {lastName} at {phoneNumber}
//HARD: Using an array of contacts, loop through each one and create a new Contact component for each

//Sending down to Contact
function ContactList(props) {
    //Loops through each contact passing in as props to the Contact component
    const contactlist = props.contacts.map((contact, index)=> {
        return (
            <Contact
                key={index} 
                index={index} 
                status={contact.status}
                firstname={contact.firstname} 
                lastname={contact.lastname}
                phonenumber={contact.phonenumber}
                updateStatus={props.updateStatus}
            />
        )
    });

    //Renders contactList outside of function
    return(
        <div>
            <div>{contactlist}</div>
        </div>
    );
}

export default ContactList;
