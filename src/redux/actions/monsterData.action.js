import {MONSTER_DATA} from "../constants";

const setData = data => ({type: MONSTER_DATA, data});

export const monsterDataAction = {
  setData
};

export default monsterDataAction;
