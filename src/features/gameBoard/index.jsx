import React from "react";
import {Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import GameMember from "../gameMember";
import Card from "../gameCard";
import GameTurns from "../gameTurns";
import playerImage from "../../shared/images/playerImage.jpg";
import "./gameBoard.css";

const GameBoard = () => {
  /* ------- Bringing state -------*/
  const fullGameData = useSelector(state => state.gameDataReducer.dataGame);
  const playerData = useSelector(state => state.playerDataReducer.playerData);
  const monsterData = useSelector(
    state => state.monsterDataReducer.monsterData
  );
  const monsterEffect = useSelector(
    state => state.monsterEffectReducer.monsterEffect
  );
  const horrorCard = monsterEffect.effect;

  /* ------------------------------- */

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
          <Card />
        </Row>
      </div>
      <GameTurns
        currentTurn={fullGameData.currentTurn}
        turnsLeft={fullGameData.turnsLeft}
        past={
          fullGameData.currentTurn === 0 ? "0" : fullGameData.currentTurn - 1
        }
      />
      <div className='messageCard'>
        {horrorCard === "HORROR"
          ? `Your cards were canceled by  ${monsterData.name}. Go to the next turn`
          : false}
      </div>
    </div>
  );
};

export default GameBoard;
