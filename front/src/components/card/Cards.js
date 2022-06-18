import React, { useEffect, useState, useRef } from 'react';

import { ArrowButton } from '../../styles/BtnStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { BattlePassContainer, CardsContainer } from '../../styles/CardStyle';

const BattlePass = (props) => {
  const container = useRef();
  const [move, setMove] = useState(0);

  useEffect(() => {
    container.current.style.transform = `translateX(${move}vw)`;
  }, [move]);

  const clickLeftButton = () => {
    if (move < 0) {
      setMove(prop => prop + 10);
    }
  };

  const clickRightButton = () => {
    setMove(prop => prop - 10);
  };

  return (
    <BattlePassContainer>
      <ArrowButton onClick={clickLeftButton} left={1}>
        <FontAwesomeIcon icon={faAnglesLeft} className='user' />
      </ArrowButton>
      <ArrowButton onClick={clickRightButton} right={1}>
        <FontAwesomeIcon icon={faAnglesRight} className='user' />
      </ArrowButton>
      <CardsContainer ref={container}>{props.children}</CardsContainer>
    </BattlePassContainer>
  );
};

export default BattlePass;
