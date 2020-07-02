import {SELECT_CARD} from "../constants";

const setData = data => ({type: SELECT_CARD, data});

export const selectCard = {
  setData
};

export default selectCard;
