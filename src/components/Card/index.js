import React from 'react';
import './styles.css';
import styled from 'styled-components';

import cardsSprite from '../../assets/img/sprite.svg';

const CardStyle = styled.svg`
  width: auto;
  height: 11rem;
  border-radius: 0.3rem;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
`;


const Card = (props) => {
  if (props.card.hidden) {
    return (
      <CardStyle viewBox="0 0 169.075 244.640">
        <use
          href={`${cardsSprite}#back`}
          width="100%"
          height="100%"
          fill="darkred"
        />
      </CardStyle>
    );
  } else {
    return (
      <CardStyle className="card dealerCard" viewBox="0 0 169.075 244.640">
        <use
          href={`${cardsSprite}#${props.card.suit}_${props.card.rank}`}
          width="100%"
          height="100%"
        />
      </CardStyle>
    );
  }
}

export default Card;