import {combineReducers} from "redux";
import gameDataReducer from "./gameData.reducer";
import playerDataReducer from "./playerData.reducer";
import monsterDataReducer from "./monsterData.reducer";
import cardDataReducer from "./cardData.reducer";
import selectCardReducer from "./selectCard.reducer";
import monsterEffectReducer from "./monsterEffect.reducer";

const rootReducer = combineReducers({
  gameDataReducer,
  playerDataReducer,
  monsterDataReducer,
  cardDataReducer,
  selectCardReducer,
  monsterEffectReducer
});

export default rootReducer;
