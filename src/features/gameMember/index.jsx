import React, {useEffect} from "react";
import {Card, Row, Col} from "react-bootstrap";
import {useSelector} from "react-redux";
import {getPlayer, getMonster} from "../../utils/apiCalls";
import "./gameMember.css";

const GameMember = ({image, name, maxHp, hp, shield}) => {
  const gameId = useSelector(state => state.gameDataReducer.dataGame.id);

  useEffect(() => {
    getPlayer(gameId);
    getMonster(gameId);
  }, [gameId]);

  return (
    <div className='game-member'>
      <Row className='row-member'>
        <Col>
          <Card className='border-0'>
            <Row>
              <Col col={3}>
                <Card.Img
                  className='card-image border'
                  top='true'
                  width='100%'
                  src={image}
                  alt='Card image cap'
                  bg-dark='true'
                />
              </Col>
              <Col col={7}>
                <Card.Body className='card-body-member bg-dark'>
                  <Card.Title id='title-member'>{name}</Card.Title>
                  <Card.Title id='title-lives'>
                    {" "}
                    HP: {hp}/{maxHp}
                  </Card.Title>
                </Card.Body>
              </Col>
              <Col col={2}>
                <div className='card-shield bg-secondary'>
                  <p>Shield: {shield}</p>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default GameMember;
