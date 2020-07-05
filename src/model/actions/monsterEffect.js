import {MONSTER_EFFECT} from "../constants/monsterEffect";

const setData = data => ({type: MONSTER_EFFECT, data});

export const monsterEffectAction = {
  setData
};

export default monsterEffectAction;
