import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CreateGame from "./pages/createGame/CreateGame";
import GameBoard from "./pages/gameBoard/GameBoard.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact>
            <CreateGame />
          </Route>
          <Route path='/board' exact>
            <GameBoard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
