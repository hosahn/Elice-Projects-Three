import React, { useEffect, useState, useRef } from 'react';
import TEXT from '../../pages/main/mainCard/TEXT';
import Container from '../card/Container';
import MainText from '../card/MainText';
import SubText from '../card/SubTitle';
import { ArrowButton } from '../../styles/BtnStyle';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const BattlePassContainer = styled.div`
  width: 300vw;
  height: 10vw;
  transition: transform 0.5s;
`;

const CardWrap = styled.div`
  width: 7%;
  float: left;
`;

const BattlePass = (props) => {
  const { width, height } = props;
  const container = useRef();
  const [move, setMove] = useState(0);

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
    <div style={{ overflow: 'hidden', position: 'relative', width: '60rem' }}>
      <ArrowButton onClick={clickLeftButton} left={1}>
        <FontAwesomeIcon icon={faAnglesLeft} className="user" />
      </ArrowButton>
      <ArrowButton onClick={clickRightButton} right={2}>
        <FontAwesomeIcon icon={faAnglesRight} className="user" />
      </ArrowButton>
      <BattlePassContainer ref={container}>
        {TEXT.map((it, index) => {
          return (
            <CardWrap>
              <Container key={index} width={width} height={height}>
                <MainText text={it.title} />
                <SubText text={it.description} />
              </Container>
            </CardWrap>
          );
        })}
      </BattlePassContainer>
    </div>
  );
};

export default BattlePass;
