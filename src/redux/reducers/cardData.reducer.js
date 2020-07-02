import {CARD_DATA} from "../constants";

const initialState = {
  cardData: []
};

const cardDataReducer = (state = initialState, action) => {
  if (action.type === CARD_DATA) {
    return {
      ...state,
      cardData: action.data
    };
  }

  return {...state};
};

export default cardDataReducer;
