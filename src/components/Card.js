import React from 'react';

const Card = ({username, email, id}) => {
    return (

        <div
        className="bg-blue 
        { background-color: #357EDD} 
        dib br3 bw2  shadow-5 pa3 ma3 grow"
         >
            <img alt="Robot" src={`https://robohash.org/${id}?200x200`} ></img>
            
            <div>
            <h2>{username}</h2>
            <p>{email}</p>

             </div>
        </div>
    )
}

export default Card;