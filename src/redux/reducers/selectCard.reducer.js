import {SELECT_CARD} from "../constants";

const initialState = {
  selectCard: []
};

const selectCardReducer = (state = initialState, action) => {
  if (action.type === SELECT_CARD) {
    return {
      ...state,
      selectCard: action.data
    };
  }

  return {...state};
};
export default selectCardReducer;
