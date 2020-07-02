import {combineReducers} from "redux";
import gameDataReducer from "./gameData.reducer";
import playerDataReducer from "./playerData.reducer";
import monsterDataReducer from "./monsterData.reducer";
import cardDataReducer from "./cardData.reducer";

const rootReducer = combineReducers({
  gameDataReducer,
  playerDataReducer,
  monsterDataReducer,
  cardDataReducer
});

export default rootReducer;
