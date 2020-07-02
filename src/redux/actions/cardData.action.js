import {CARD_DATA} from "../constants";

const setData = data => ({type: CARD_DATA, data});

export const cardDataAction = {
  setData
};

export default cardDataAction;
