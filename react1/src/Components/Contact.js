import React from 'react';

//Contact function sets up the format for each contact
export default function Contact(props) {
    return (
        <div className="contact">
          <div style={{backgroundColor:props.status, width:'20px', height:'20px'}} /> 
          <p>You need to contact {props.firstname} {props.lastname} at {props.phonenumber}</p>
          <button onClick={() => props.updateStatus(props.index)}>Status</button>
        </div>
          
    );
}

  