import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Api from '../../api';
import {
  EmotionCard,
  Title,
  Date,
  TitleContainer,
  DateWrapper,
} from '../../styles/NoteStyle';
import { handleScroll } from '../../utils/handleScroll';

const EmotionList = () => {
  const navigate = useNavigate();
  const [diaryList, setDiaryList] = useState([]);
  const [cursor, setCursor] = useState('');

  useEffect(() => {
    getDiaryList();
  }, []);

  // useEffect(() => {
  //   window.addEventListener(
  //     'scroll',
  //     function (event) {
  //       const res = handleScroll(event);
  //       if (res === true) {
  //         getDiaryList();
  //       } else {
  //         console.log('false');
  //       }
  //     },
  //     false
  //   );
  // }, []);  함수 return

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const getDiaryList = async () => {
    const res = await Api.get('diary/list');
    const sliceData = res.data.slice(0, 4);
    const getCursor = res.data.slice(-1);
    setCursor(getCursor[0].cursor);
    console.log(cursor);
    setDiaryList(sliceData);
  };

  const onClick = () => {
    getList();
  };

  const getList = async () => {
    try {
      const res = await Api.get(`diary/list/?cursor=${cursor}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
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
        </EmotionCard>
      ))}
      <button onClick={onClick}>버튼</button>
    </>
  );
};

export default EmotionList;
