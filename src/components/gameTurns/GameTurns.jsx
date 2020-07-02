import React from "react";
import "./gameTurns.css";
import {Button} from "react-bootstrap";

function GameTurns(props) {
  return (
    <div className='game-board-turns'>
      <div className='game-turns'>
        <h3>TURNS</h3>
      </div>
      <div className='current-past-left'>
        <div className='game-current'>
          <h6>CURRENT</h6>
          <h1>{props.currentTurn}</h1>
        </div>
        <div className='game-past'>
          <h6>PAST</h6>
          <h1>{props.past}</h1>
        </div>
        <div className='game-left'>
          <h6>LEFT</h6>
          <h1>{props.turnsLeft}</h1>
        </div>
        <div className='game-button'>
          <Button onClick={props.click}>END TURN</Button>
        </div>
      </div>
    </div>
  );
}

export default GameTurns;
