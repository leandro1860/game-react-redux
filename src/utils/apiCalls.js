import axios from "axios";
import {store} from "../index";
import cardDataAction from "../model/actions/cardData";
import playerDataAction from "../model/actions/playerData";
import monsterDataAction from "../model/actions/monsterData";
import gameDataAction from "../model/actions/gameData";
import monsterEffectAction from "../model/actions/monsterEffect";

export const getPlayer = async gameId => {
  await axios
    .get(`http://game.bons.me/api/games/${gameId}/player`)
    .then(res => {
      const {data} = res;
      store.dispatch(playerDataAction.setData(data));
    });
};

export const getMonster = async gameId => {
  await axios
    .get(`http://game.bons.me/api/games/${gameId}/monster`)
    .then(res => {
      const {data} = res;
      store.dispatch(monsterDataAction.setData(data));
    });
};
export const getCards = async playerDataId => {
  await axios
    .get(`http://game.bons.me/api/players/${playerDataId}/cards`)
    .then(res => {
      const {data} = res;
      store.dispatch(cardDataAction.setData(data));
    });
};

export const getSelectCards = async (gameId, selectCardId) => {
  await axios
    .post(`http://game.bons.me/api/games/${gameId}/next-turn`, {
      card: selectCardId
    })
    .then(res => {
      const {data} = res;
      store.dispatch(gameDataAction.setData(data.game));
      store.dispatch(monsterEffectAction.setData(data.monsterEffect));
    });
};
