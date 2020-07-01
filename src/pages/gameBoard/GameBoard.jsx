import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import GameMember from "../../components/gameMember/GameMember";
import Card from "../../components/gameCard/GameCard";
import GameTurns from "../../components/gameTurns/GameTurns";
import "./gameBoard.css";

function GameBoard() {
  return (
    <Container>
      <div>
        <div className='game-member-board'>
          <div className='enemy'>
            <GameMember lives='25/48' name='Enemy' shield='2' />
          </div>
          <div className='player'>
            <GameMember lives='15/48' name='Player' shield='23' />
          </div>
          <div className='cards'>
            <Row>
              <Col col='4'>
                <Card />
              </Col>
              <Col col='4'>
                <Card />
              </Col>
              <Col col='4'>
                <Card />
              </Col>
            </Row>
            <div>
              <GameTurns />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default GameBoard;
