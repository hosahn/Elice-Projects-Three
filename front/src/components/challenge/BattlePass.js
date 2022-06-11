import React, { useEffect, useState, useRef } from 'react';
import TEXT from '../../pages/main/mainCard/TEXT';
import Container from '../card/Container';
import MainText from '../card/MainText';
import SubText from '../card/SubTitle';
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
    <BattlePassContainer containerWdith={containerWdith} margin={margin}>
      <ArrowButton onClick={clickLeftButton} left={1}>
        <FontAwesomeIcon icon={faAnglesLeft} className="user" />
      </ArrowButton>
      <ArrowButton onClick={clickRightButton} right={2}>
        <FontAwesomeIcon icon={faAnglesRight} className="user" />
      </ArrowButton>
      <CardsContainer ref={container}>
        {TEXT.map((it, index) => {
          return (
            <CardWrap>
              <Container key={index} width={width} height={height}>
                <MainText text={it.title} />
                <SubText text={it.description} />
                {challenge && <Btn text={'일단 임의로'} />}
              </Container>
            </CardWrap>
          );
        })}
      </CardsContainer>
    </BattlePassContainer>
  );
};

export default BattlePass;
