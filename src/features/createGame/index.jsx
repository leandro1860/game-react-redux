import React, {useState} from "react";
import {FormGroup, FormControl, Button, Container} from "react-bootstrap";
import axios from "axios";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import "./createGame.css";
import gameDataAction from "../../model/actions/gameData";

const CreateGame = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [playerName, setPlayerName] = useState("");
  const handleChangeText = e => {
    setPlayerName(e.target.value);
  };

  const getGame = async name => {
    await axios
      .post("http://game.bons.me/api/games?name", {name})
      .then(res => {
        const {data} = res;
        dispatch(gameDataAction.setData(data));
        history.push("/board");
      });
  };

  return (
    <Container>
      <div className='create-game'>
        <div className='welcome-title'>
          <h1>Welcome to Bons Game</h1>
          <h3>What´s your name?</h3>
        </div>
        <div className='entry-form'>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <FormGroup>
              <FormControl
                type='text'
                placeholder='NAME'
                onChange={handleChangeText}
              />
            </FormGroup>
            <Button block onClick={() => getGame(playerName)}>
              LET´S PLAY
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default CreateGame;
