import React from 'react';
import './card.component.css';

const Card = (props) => {
  return (
    <div className='card-container'>
      <img src= {`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="sorry"/>
      <h2>{props.monster.name}</h2>
      {/* {console.log(props.monster.id)} */}
      <p>{props.monster.email}</p>
    </div>
  );
}
 
export default Card;