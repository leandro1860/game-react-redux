import {GAME_DATA} from "../constants/gameData";

const setData = data => ({type: GAME_DATA, data});

export const gameDataAction = {
  setData
};

export default gameDataAction;
