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
  const [submitCursor, setSubmitCursor] = useState('');

  useEffect(() => {
    getDiaryList();
  }, []);

  useEffect(() => {
    console.log('cursor', submitCursor);
  }, [submitCursor]);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      function (event) {
        const res = handleScroll(event);
        if (res === true) {
          getList();
        } else {
          // console.log('false');
        }
      },
      false
    );
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const getDiaryList = async () => {
    console.log('1');
    const res = await Api.get('diary/list');
    const sliceData = res.data.slice(0, 9);
    setSubmitCursor(res.data.slice(-1)[0].cursor);
    setDiaryList([...sliceData]);
  };

  const getList = async () => {
    try {
      const res = await Api.get(`diary/list/?cursor=${submitCursor}`);
      const sliceData = res.data.slice(0, 9);
      setSubmitCursor(res.data.slice(-1)[0].cursor);
      setDiaryList((data) => [...data, ...sliceData]);
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
    </>
  );
};

export default EmotionList;
