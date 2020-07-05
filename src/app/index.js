import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CreateGame from "../features/createGame";
import GameBoard from "../features/gameBoard/index.jsx";

function App() {
  return (
    <Router>
      <div className='app'>
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
