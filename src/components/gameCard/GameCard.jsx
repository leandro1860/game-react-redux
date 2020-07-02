import React from "react";
import {Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import selectCardAction from "../../redux/actions/selectCard.action";

import "./gameCard.css";

function GameCard(props) {
  const dispatch = useDispatch();

  function handleCallSelected(data) {
    dispatch(selectCardAction.setData(data));
  }
  return (
    <div>
      <Card
        className='game-card bg-dark'
        onClick={() => handleCallSelected(props.cardId)}
      >
        <p className='card-value'>{props.cardValue}</p>
        <p className='title-card'>{props.effect}</p>
      </Card>
    </div>
  );
}

export default GameCard;
