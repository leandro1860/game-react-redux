import {GAME_DATA} from "../constants/gameData";

const initialState = {
  dataGame: []
};

const gameDataReducer = (state = initialState, action) => {
  if (action.type === GAME_DATA) {
    return {
      ...state,
      dataGame: action.data
    };
  }

  return {...state};
};

export default gameDataReducer;
