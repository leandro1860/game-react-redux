import React from "react";
import {Card, Row, Col} from "react-bootstrap";
import "./gameMember.css";

function GameMember(props) {
  return (
    <div className='game-member'>
      <Row>
        <Col col='6'>
          <Row>
            <Col>
              <Card className='card-member'>
                <Row>
                  <Col md='5'>
                    <Card.Img
                      top
                      width='100%'
                      src='https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'
                      alt='Card image cap'
                      bg-dark
                    />
                  </Col>
                  <Col md='7'>
                    <Card.Body className='card-body bg-dark'>
                      <Card.Title className='title-member'>
                        {props.name}
                      </Card.Title>
                      <Card.Title className='title-lives'>
                        {" "}
                        HP: {props.lives}
                      </Card.Title>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col col='6'>
          <div className='card-shield bg-secondary'>
            <p>Shield: {props.shield}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default GameMember;
