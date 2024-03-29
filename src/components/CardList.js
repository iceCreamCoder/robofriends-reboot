import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div>
           {
          robots.map((user, i) => {
          return  (
            <Card
              key={i}
              id={robots[i].id}
              email={robots[i].email}
              username={robots[i].username} 
              />
            )
          }) 
         }
        </div>
    )
}

export default CardList;