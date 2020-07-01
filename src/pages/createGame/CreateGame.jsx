import React from "react";
import {FormGroup, FormControl, Button, Container} from "react-bootstrap";
import "./createGame.css";

const CreateGame = () => (
  <Container>
    <div className='create-game  '>
      <div className='welcome-title'>
        <h1>Welcome to Bons Game</h1>
        <h3>What´s your name?</h3>
      </div>
      <div className='entry-form'>
        <form>
          <FormGroup>
            <FormControl type='text' placeholder='NAME' />
          </FormGroup>
          <Button block type='submit'>
            LET´S PLAY
          </Button>
        </form>
      </div>
    </div>
  </Container>
);

export default CreateGame;
