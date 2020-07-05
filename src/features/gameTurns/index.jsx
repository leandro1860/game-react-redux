import React, {useState} from "react";
import "./gameTurns.css";
import {useSelector} from "react-redux";
import {Button} from "react-bootstrap";
import {
  getCards,
  getPlayer,
  getMonster,
  getSelectCards
} from "../../utils/apiCalls";
import ModalNotification from "../modalNotification";
import {useHistory} from "react-router-dom";

const GameTurns = ({currentTurn, past, turnsLeft}) => {
  const history = useHistory();

  const playerData = useSelector(state => state.playerDataReducer.playerData);
  const monsterData = useSelector(
    state => state.monsterDataReducer.monsterData
  );
  const fullGameData = useSelector(state => state.gameDataReducer.dataGame);
  const playerDataId = playerData.id;
  const gameId = fullGameData.id;
  const selectCardId = useSelector(state => state.selectCardReducer.selectCard);

  const [modalShow, setModalShow] = useState(false);
  const [gameResult, setGameResult] = useState("");
  const [gameStatistics, setGameStatistics] = useState("");

  const turnClick = async () => {
    await getSelectCards(gameId, selectCardId);
    await getCards(playerDataId);
    await getPlayer(gameId);
    await getMonster(gameId);

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
    <div className='game-board-turns'>
      <div className='game-turns'>
        <h3>TURNS</h3>
      </div>
      <div className='current-past-left'>
        <div className='game-current'>
          <h6>CURRENT</h6>
          <h1>{currentTurn}</h1>
        </div>
        <div className='game-past'>
          <h6>PAST</h6>
          <h1>{past}</h1>
        </div>
        <div className='game-left'>
          <h6>LEFT</h6>
          <h1>{turnsLeft}</h1>
        </div>
        <div className='game-button'>
          <Button onClick={() => turnClick()}>END TURN</Button>
        </div>
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

export default GameTurns;
