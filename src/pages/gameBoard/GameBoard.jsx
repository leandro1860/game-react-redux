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
  console.log(playerData);

  const monsterData = useSelector(
    state => state.monsterDataReducer.monsterData
  );
  console.log(monsterData);

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
