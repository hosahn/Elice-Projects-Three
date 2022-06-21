import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Api from '../../api';
import { EmotionCard, Title, DiaryDate, TitleContainer, DateWrapper } from '../../styles/NoteStyle';

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

  const openCard = e => {
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
          <DateWrapper>{/* <DiaryDate>{it.date.slice(0, 10)}</DiaryDate> */}</DateWrapper>
        </EmotionCard>
      ))}
    </>
  );
};

export default EmotionList;
