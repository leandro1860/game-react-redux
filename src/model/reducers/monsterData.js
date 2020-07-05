import {MONSTER_DATA} from "../constants/monsterData";

const initialState = {
  monsterData: []
};

const monsterDataReducer = (state = initialState, action) => {
  if (action.type === MONSTER_DATA) {
    return {
      ...state,
      monsterData: action.data
    };
  }

  return {...state};
};

export default monsterDataReducer;
