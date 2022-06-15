import React, { useState } from 'react';
import styled from 'styled-components';
import View from './View';

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
  font-size: 20px;
  font-size: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  margin: 0px 30px;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  margin-bottom: 3px;
`;

const SearchEmotionList = () => {
  const [open, setOpen] = useState(false);

  const openCard = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <EmotionCard onClick={openCard}>
        <span>이미지</span>
        <TitleContainer>
          <TitleWrap>
            <Title>title</Title>
          </TitleWrap>
          <Date>날짜</Date>
        </TitleContainer>
      </EmotionCard>
      {open && <View />}
    </>
  );
};

export default SearchEmotionList;
