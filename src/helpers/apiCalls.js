import axios from "axios";
import {store} from "../index";
import cardDataAction from "../redux/actions/cardData.action";
import playerDataAction from "../redux/actions/playerData.action";
import monsterDataAction from "../redux/actions/monsterData.action";
import gameDataAction from "../redux/actions/gameData.action";

export const getCards = async playerDataId => {
  await axios
    .get(`http://game.bons.me/api/players/${playerDataId}/cards`)
    .then(res => {
      const {data} = res;
      store.dispatch(cardDataAction.setData(data));
    });
};

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

export const getSelectCards = async (gameId, selectCardId) => {
  await axios
    .post(`http://game.bons.me/api/games/${gameId}/next-turn`, {
      card: selectCardId
    })
    .then(res => {
      const {data} = res;
      store.dispatch(gameDataAction.setData(data.game));
    });
};
