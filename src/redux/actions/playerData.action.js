import {PLAYER_DATA} from "../constants";

const setData = data => ({type: PLAYER_DATA, data});

export const playerDataAction = {
  setData
};

export default playerDataAction;
