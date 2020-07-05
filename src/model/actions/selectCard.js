import {SELECT_CARD} from "../constants/selectCard";

const setData = data => ({type: SELECT_CARD, data});

export const selectCardAction = {
  setData
};

export default selectCardAction;
