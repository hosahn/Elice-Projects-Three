import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as Api from '../../api';

const EmotionCard = styled.button`
  background-color: ${({ theme }) => theme.color.lightGrayBg};
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px 20px;
  margin-bottom: 20px;
  span {
    font-family: 'InfinitySans-RegularA1';
  }
`;

const Title = styled.span`
  font-family: 'GothicA1-Light';
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;
`;

const Date = styled.span`
  font-family: 'GothicA1-Light';
  font-weight: bold;
  font-size: 10px;
  margin-right: 10px;
`;

const TitleContainer = styled.div`
  margin: 0px 20px;
`;

const DateWrapper = styled.div`
  float: right;
`;

const EmotionList = () => {
  const navigate = useNavigate();
  const [diaryList, setDiaryList] = useState([]);

  useEffect(() => {
    getDiaryList();
  }, []);

  const getDiaryList = async () => {
    const res = await Api.get('diary/list');
    console.log(res.data);
    setDiaryList(res.data);
  };

  const openCard = (e) => {
    const diaryId = e.currentTarget.name;
    navigate(`/diary/${diaryId}`, { state: diaryId });
    console.log(e.currentTarget.name);
  };

  return (
    <>
      {diaryList.map((it, index) => (
        <EmotionCard onClick={openCard} name={it.id} key={index}>
          <TitleContainer>
            <span>이미지</span>
            <Title>{it.title}</Title>
          </TitleContainer>
          <DateWrapper>
            <Date>{it.date.slice(0, 10)}</Date>
          </DateWrapper>
        </EmotionCard>
      ))}
    </>
  );
};

export default EmotionList;
