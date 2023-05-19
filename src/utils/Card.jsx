import React from 'react'

const Card = (props) => {
  return (
      <div className="card">
          <img className='card-image' src={props.image} />
          <h2>{props.title}</h2>
      </div>
  );
}

export default Card