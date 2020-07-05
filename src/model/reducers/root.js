import {combineReducers} from "redux";
import gameDataReducer from "./gameData";
import playerDataReducer from "./playerData";
import monsterDataReducer from "./monsterData";
import cardDataReducer from "./cardData";
import selectCardReducer from "./selectCard";
import monsterEffectReducer from "./monsterEffect";

const rootReducer = combineReducers({
  gameDataReducer,
  playerDataReducer,
  monsterDataReducer,
  cardDataReducer,
  selectCardReducer,
  monsterEffectReducer
});

export default rootReducer;
