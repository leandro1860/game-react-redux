import React, {useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {useSelector} from "react-redux";
import axios from "axios";
import GameMember from "../../components/gameMember/GameMember";
import Card from "../../components/gameCard/GameCard";
import GameTurns from "../../components/gameTurns/GameTurns";
import {useDispatch} from "react-redux";
import playerDataAction from "../../redux/actions/playerData.action";
import monsterDataAction from "../../redux/actions/monsterData.action";
import cardDataAction from "../../redux/actions/cardData.action";

import playerImage from "./images/playerImage.jpg";
import "./gameBoard.css";

function GameBoard() {
  const dispatch = useDispatch();
  const fullGameData = useSelector(state => state.gameDataReducer.dataGame);
  const gameId = fullGameData.id;

  useEffect(() => {
    const getPlayer = async () => {
      await axios
        .get(`http://game.bons.me/api/games/${gameId}/player`)
        .then(res => {
          const {data} = res;
          dispatch(playerDataAction.setData(data));
        });
    };
    getPlayer();
  }, [dispatch, gameId]);

  useEffect(() => {
    const getMonster = async () => {
      await axios
        .get(`http://game.bons.me/api/games/${gameId}/monster`)
        .then(res => {
          const {data} = res;
          dispatch(monsterDataAction.setData(data));
        });
    };
    getMonster();
  }, [dispatch, gameId]);

  const playerData = useSelector(state => state.playerDataReducer.playerData);
  const playerDataId = playerData.id;

  const monsterData = useSelector(
    state => state.monsterDataReducer.monsterData
  );

  useEffect(() => {
    const getCards = async () => {
      await axios
        .get(`http://game.bons.me/api/players/${playerDataId}/cards`)
        .then(res => {
          const {data} = res;
          dispatch(cardDataAction.setData(data));
        });
    };
    getCards();
  }, [dispatch, playerDataId]);

  const cardData = useSelector(state => state.cardDataReducer.cardData);
  const effect = cardData.map(p => p.effect);
  const cardValue = cardData.map(p => p.value);

  return (
    <Container>
      <div>
        <div className='game-member-board'>
          <div className='enemy'>
            <GameMember
              hp={monsterData.hp}
              maxHp={monsterData.maxHp}
              name={monsterData.name}
              shield={monsterData.shield}
              image={monsterData.image}
            />
          </div>
          <div className='player'>
            <GameMember
              hp={playerData.hp}
              maxHp={playerData.maxHp}
              name={playerData.name}
              shield={playerData.shield}
              image={playerImage}
            />
          </div>
          <div className='cards'>
            <Row>
              <Col col='4'>
                <Card effect={effect[0]} cardValue={cardValue[0]} />
              </Col>
              <Col col='4'>
                <Card effect={effect[1]} cardValue={cardValue[1]} />
              </Col>
              <Col col='4'>
                <Card effect={effect[2]} cardValue={cardValue[2]} />
              </Col>
            </Row>
            <div>
              <GameTurns
                currentTurn={fullGameData.currentTurn}
                turnsLeft={fullGameData.turnsLeft}
                past={
                  fullGameData.currentTurn === 0
                    ? "0"
                    : fullGameData.turnsLeft -
                      (fullGameData.turnsLeft - fullGameData.currentTurn)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default GameBoard;
