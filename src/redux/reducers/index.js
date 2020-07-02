import {combineReducers} from "redux";
import gameDataReducer from "./gameData.reducer";
import playerDataReducer from "./playerData.reducer";
import monsterDataReducer from "./monsterData.reducer";

const rootReducer = combineReducers({
  gameDataReducer,
  playerDataReducer,
  monsterDataReducer
});

export default rootReducer;
