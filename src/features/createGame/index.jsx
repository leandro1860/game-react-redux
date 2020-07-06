import React, {useState} from "react";
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  Container
} from "react-bootstrap";
import axios from "axios";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import "./createGame.css";
import gameDataAction from "../../model/actions/gameData";

const CreateGame = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [playerName, setPlayerName] = useState("");
  const [validated, setValidated] = useState(false);

  const getGame = async name => {
    try {
      await axios
        .post("http://game.bons.me/api/games?name", {name})
        .then(res => {
          const {data} = res;
          dispatch(gameDataAction.setData(data));
          history.push("/board");
        });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeText = e => {
    setPlayerName(e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setValidated(true);
    getGame(playerName);
  };

  return (
    <Container>
      <div className='create-game'>
        <div className='welcome-title'>
          <h1>Welcome to Bons Game</h1>
          <h3>What´s your name?</h3>
        </div>
        <div className='entry-form'>
          <Form validated={validated} noValidate onSubmit={handleSubmit}>
            <FormGroup>
              <FormControl
                type='text'
                placeholder='Your name...'
                onChange={handleChangeText}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please provide a name.
              </Form.Control.Feedback>
            </FormGroup>
            <Button block type='submit'>
              LET´S PLAY
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default CreateGame;
