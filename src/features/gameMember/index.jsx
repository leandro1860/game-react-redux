import React, {useEffect} from "react";
import {Card, Row, Col} from "react-bootstrap";
import {useSelector} from "react-redux";
import {getPlayer, getMonster} from "../../utils/apiCalls";
import "./gameMember.css";

const GameMember = props => {
  const gameId = useSelector(state => state.gameDataReducer.dataGame.id);

  useEffect(() => {
    getPlayer(gameId);
    getMonster(gameId);
  }, [gameId]);

  return (
    <div className='game-member'>
      <Row className='row-member'>
        <Col col='6'>
          <Card className='card-member'>
            <Row className='row-card'>
              <Col col='5'>
                <Card.Img
                  className='card-image'
                  top='true'
                  width='100%'
                  src={props.image}
                  alt='Card image cap'
                  bg-dark='true'
                />
              </Col>
              <Col col='7'>
                <Card.Body className='card-body-member bg-dark'>
                  <Card.Title id='title-member'>{props.name}</Card.Title>
                  <Card.Title id='title-lives'>
                    {" "}
                    HP: {props.hp}/{props.maxHp}
                  </Card.Title>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col col='6'>
          <div className='card-shield bg-secondary'>
            <p>Shield: {props.shield}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default GameMember;
