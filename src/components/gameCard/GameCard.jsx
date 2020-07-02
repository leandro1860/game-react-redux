import React from "react";
import {Card} from "react-bootstrap";
import "./gameCard.css";

function GameCard(props) {
  return (
    <div>
      <Card className='game-card bg-dark'>
        <p className='card-value'>{props.cardValue}</p>
        <p className='title-card'>{props.effect}</p>
      </Card>
    </div>
  );
}

export default GameCard;
