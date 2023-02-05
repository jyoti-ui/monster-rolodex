import React from "react";
import "./card.styles.css";

const Card = ({monster, className}) => {
    const { name, id, email } = monster;
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2`}
          className={className}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }

export default Card;
