import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const EmotionCard = styled.button`
  background-color: ${({ theme }) => theme.color.lightGrayBg};
  height: 70px;
  width: 100%;
  display: flex;
  border-radius: 10px;
  padding: 20px 20px;
  span {
    font-family: 'InfinitySans-RegularA1';
  }
`;

const Title = styled.span`
  font-family: 'GothicA1-Light';
  font-weight: bold;
  font-size: 20px;
`;

const Date = styled.span`
  font-family: 'GothicA1-Light';
  font-weight: bold;
  font-size: 10px;
  margin-right: 70px;
`;

const TitleContainer = styled.div`
  display: flex;
  margin: 0px 30px;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  margin-bottom: 3px;
`;

const EmotionList = () => {
  const navigate = useNavigate();

  const openCard = () => {
    navigate(`/diary/1`);
  };

  return (
    <>
      <EmotionCard onClick={openCard}>
        <span>이미지</span>
        <TitleContainer>
          <TitleWrap>
            <Title>드디어 끝났다!!</Title>
          </TitleWrap>
          <Date>2022-07-03</Date>
        </TitleContainer>
      </EmotionCard>
    </>
  );
};

export default EmotionList;
