import {PLAYER_DATA} from "../constants";

const initialState = {
  playerData: []
};

const playerDataReducer = (state = initialState, action) => {
  if (action.type === PLAYER_DATA) {
    return {
      ...state,
      playerData: action.data
    };
  }

  return {...state};
};

export default playerDataReducer;
