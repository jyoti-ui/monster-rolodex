import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ monsters }) => {
  console.log("render Cardlist Component");
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { id } = monster;
        return <Card key={id} className="card-list-image" monster={monster} />;
      })}
    </div>
  );
};
export default CardList;
