import {MONSTER_EFFECT} from "../constants";

const initialState = {
  monsterEffect: []
};

const monsterEffectReducer = (state = initialState, action) => {
  if (action.type === MONSTER_EFFECT) {
    return {
      ...state,
      monsterEffect: action.data
    };
  }

  return {...state};
};

export default monsterEffectReducer;
