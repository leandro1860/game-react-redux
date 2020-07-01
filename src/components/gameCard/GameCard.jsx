import React from "react";
import {Card} from "react-bootstrap";
import "./gameCard.css";

function GameCard() {
  return (
    <div>
      <Card className='game-card bg-dark'>
        <Card.Img src='holder.js/100px180' />
        <p className='title-card'>Card</p>
      </Card>
    </div>
  );
}

export default GameCard;
