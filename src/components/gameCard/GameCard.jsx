import React, {useEffect} from "react";
import {Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import selectCardAction from "../../redux/actions/selectCard.action";
import {getCards} from "../../helpers/apiCalls";
import "./gameCard.css";

const GameCard = props => {
  const dispatch = useDispatch();

  const monsterData = useSelector(
    state => state.monsterEffectReducer.monsterEffect
  );

  const playerData = useSelector(
    state => state.playerDataReducer.playerData.id
  );

  console.log(playerData);

  useEffect(() => {
    getCards(playerData);
  }, [playerData]);

  const horrorCard = monsterData.effect;

  const handleCallSelected = data => {
    dispatch(selectCardAction.setData(data));
  };
  return (
    <Card className='game-card bg-primary'>
      <Card.Body
        className={`${
          horrorCard === "HORROR"
            ? "disabledCard bg-danger"
            : " activeCard bg-success disabled "
        }  `}
        onClick={() =>
          horrorCard !== "HORROR" ? handleCallSelected(props.cardId) : false
        }
      >
        <Card.Text className='card-value'>{props.cardValue}</Card.Text>{" "}
        <Card.Text className='title-card'>{props.effect}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
