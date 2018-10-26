import React from 'react';


//name and craft destructured, passed in as props
const person = ({name, craft}) => {
    return (
        <div>
            <p>{name} {craft}</p>
        </div>
    )
}

export default person