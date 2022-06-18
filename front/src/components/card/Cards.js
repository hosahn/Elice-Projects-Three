import React, { useEffect, useState, useRef } from 'react';
<<<<<<< HEAD
import TEXT from '../../pages/main/TEXT';
import Container from './Container';
import MainText from './MainText';
import SubText from './SubTitle';
import { ArrowButton } from '../../styles/BtnStyle';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Btn from '../Btn';

const BattlePassContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin-left: ${(props) => `${props.margin}rem`};
  margin-right: ${(props) => `${props.margin}rem`};
  width: ${(props) => `${props.containerWdith}rem`};
`;

const CardsContainer = styled.div`
  width: 300vw;
  height: 10vw;
  transition: transform 0.5s;
`;

const CardWrap = styled.div`
  width: 7%;
  float: left;
`;

const BattlePass = (props) => {
  const { width, height, containerWdith, margin, challenge } = props;
  const container = useRef();
  const [move, setMove] = useState(0);

  console.log(containerWdith);
=======

import { ArrowButton } from '../../styles/BtnStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { BattlePassContainer, CardsContainer } from '../../styles/CardStyle';

const BattlePass = (props) => {
  const container = useRef();
  const [move, setMove] = useState(0);

>>>>>>> origin/BE/test/HS
  useEffect(() => {
    container.current.style.transform = `translateX(${move}vw)`;
  }, [move]);

  const clickLeftButton = () => {
    if (move < 0) {
      setMove((prop) => prop + 10);
    }
  };

  const clickRightButton = () => {
    setMove((prop) => prop - 10);
  };

  return (
<<<<<<< HEAD
    <BattlePassContainer containerWdith={containerWdith} margin={margin}>
=======
    <BattlePassContainer>
>>>>>>> origin/BE/test/HS
      <ArrowButton onClick={clickLeftButton} left={1}>
        <FontAwesomeIcon icon={faAnglesLeft} className="user" />
      </ArrowButton>
      <ArrowButton onClick={clickRightButton} right={1}>
        <FontAwesomeIcon icon={faAnglesRight} className="user" />
      </ArrowButton>
<<<<<<< HEAD
      <CardsContainer ref={container}>
        {TEXT.map((it, index) => {
          return (
            <CardWrap>
              <Container key={index} width={width} height={height}>
                <MainText text={it.title} />
                <SubText text={it.description} />
                {challenge && <Btn text={'버튼'} />}
              </Container>
            </CardWrap>
          );
        })}
      </CardsContainer>
=======
      <CardsContainer ref={container}>{props.children}</CardsContainer>
>>>>>>> origin/BE/test/HS
    </BattlePassContainer>
  );
};

export default BattlePass;
