import React, {useState} from "react";
import {Row, Col} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import GameMember from "../../components/gameMember/GameMember";
import Card from "../../components/gameCard/GameCard";
import GameTurns from "../../components/gameTurns/GameTurns";
import playerImage from "./images/playerImage.jpg";
import {getCards} from "../../helpers/apiCalls";
import {getPlayer} from "../../helpers/apiCalls";
import {getMonster} from "../../helpers/apiCalls";
import {getSelectCards} from "../../helpers/apiCalls";
import ModalNotification from "../../components/modalNotification/ModalNotification";
import "./gameBoard.css";

const GameBoard = () => {
  const history = useHistory();

  /* ------- Bringing state -------*/
  const fullGameData = useSelector(state => state.gameDataReducer.dataGame);
  const gameId = fullGameData.id;
  const playerData = useSelector(state => state.playerDataReducer.playerData);
  const playerDataId = playerData.id;
  const selectCardId = useSelector(state => state.selectCardReducer.selectCard);
  const monsterData = useSelector(
    state => state.monsterDataReducer.monsterData
  );
  const monsterEffect = useSelector(
    state => state.monsterEffectReducer.monsterEffect
  );
  const horrorCard = monsterEffect.effect;

  /* ------------------------------- */

  const cardData = useSelector(state => state.cardDataReducer.cardData);
  const effect = cardData.map(p => p.effect);
  const cardValue = cardData.map(p => p.value);
  const cardId = cardData.map(p => p.id);

  const [modalShow, setModalShow] = useState(false);
  const [gameResult, setGameResult] = useState("");
  const [gameStatistics, setGameStatistics] = useState("");

  const turnClick = () => {
    getCards(playerDataId);
    getPlayer(gameId);
    getMonster(gameId);
    getSelectCards(gameId, selectCardId);

    if (
      (monsterData.shield > playerData.shield &&
        fullGameData.turnsLeft === 0) ||
      (playerData.hp === 0 && monsterData.hp > 0)
    ) {
      setModalShow(true);
      setGameResult("Ups.. you lose! :(");
      setGameStatistics(
        `${monsterData.name}: ${monsterData.shield} ... ${playerData.name}: ${playerData.shield}`
      );
    } else if (
      monsterData.shield === playerData.shield &&
      fullGameData.turnsLeft === 0
    ) {
      setModalShow(true);
      setGameResult("It's a draw");
      setGameStatistics(
        `${monsterData.name}: ${monsterData.shield} ... ${playerData.name}: ${playerData.shield}`
      );
    } else if (
      (monsterData.shield < playerData.shield &&
        fullGameData.turnsLeft === 0) ||
      (playerData.hp > 0 && monsterData.hp === 0)
    ) {
      setModalShow(true);
      setGameResult("Congratulations! You Win! (:");
      setGameStatistics(
        `${monsterData.name}: ${monsterData.shield} ... ${playerData.name}: ${playerData.shield}`
      );
    }
  };

  return (
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
        <Row className='rowCards'>
          <Col col='4'>
            <Card
              effect={effect[0]}
              cardValue={cardValue[0]}
              cardId={cardId[0]}
            />
          </Col>
          <Col col='4'>
            <Card
              effect={effect[1]}
              cardValue={cardValue[1]}
              cardId={cardId[1]}
            />
          </Col>
          <Col col='4'>
            <Card
              effect={effect[2]}
              cardValue={cardValue[2]}
              cardId={cardId[2]}
            />
          </Col>
        </Row>
      </div>
      <GameTurns
        currentTurn={fullGameData.currentTurn}
        turnsLeft={fullGameData.turnsLeft}
        past={
          fullGameData.currentTurn === 0 ? "0" : fullGameData.currentTurn - 1
        }
        click={() => turnClick()}
      />
      <div className='messageCard'>
        {horrorCard === "HORROR"
          ? `Your cards were canceled by  ${monsterData.name}. Go to the next turn`
          : false}
      </div>
      <div className='modal'>
        <ModalNotification
          show={modalShow}
          result={gameResult}
          statistics={gameStatistics}
          playAgain={() => history.push("/")}
        />
      </div>
    </div>
  );
};

export default GameBoard;
