import React, {useEffect} from "react";
import {Card, Col} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import selectCardAction from "../../model/actions/selectCard";
import {getCards} from "../../utils/apiCalls";
import "./gameCard.css";

const GameCard = () => {
  const dispatch = useDispatch();

  const monsterData = useSelector(
    state => state.monsterEffectReducer.monsterEffect
  );

  const playerData = useSelector(
    state => state.playerDataReducer.playerData.id
  );

  const dataCard = useSelector(state => state.cardDataReducer.cardData);

  const arrayCard = dataCard.map(card => card);

  const cardData = arrayCard.reverse().slice(0, 3);

  const selectedCard = useSelector(state => state.selectCardReducer.selectCard);

  useEffect(() => {
    getCards(playerData);
  }, [dispatch, playerData]);

  const horrorCard = monsterData.effect;

  const handleCallSelected = data => {
    dispatch(selectCardAction.setData(data));
  };
  return (
    cardData &&
    cardData.map(card => {
      const {effect, value, id} = card;
      console.log("card id", id);
      return (
        <Col key={id} col='4'>
          <Card className='game-card bg-primary'>
            <Card.Body
              className={`${
                horrorCard === "HORROR"
                  ? "disabledCard bg-secondary"
                  : " activeCard bg-success  "
              } ${selectedCard === id ? "bg-info" : "bg-success"}`}
              onClick={() =>
                horrorCard !== "HORROR" ? handleCallSelected(id) : false
              }
            >
              <Card.Text className='card-value'>{value}</Card.Text>{" "}
              <Card.Text className='title-card'>{effect}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    })
  );
};

export default GameCard;
