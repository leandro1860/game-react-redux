import React from "react";
import "./gameTurns.css";
import {Button} from "react-bootstrap";

function GameTurns() {
  return (
    <div className='game-board-turns'>
      <div className='game-turns'>
        <h3>TURNS</h3>
      </div>
      <div className='current-past-left'>
        <div className='game-current'>
          <h6>CURRENT</h6>
          <h1>12</h1>
        </div>
        <div className='game-past'>
          <h6>PAST</h6>
          <h1>11</h1>
        </div>
        <div className='game-left'>
          <h6>LEFT</h6>
          <h1>8</h1>
        </div>
        <div className='game-button'>
          <Button>END TURN</Button>
        </div>
      </div>
    </div>
  );
}

export default GameTurns;
