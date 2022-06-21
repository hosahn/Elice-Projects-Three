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

  useEffect(() => {
    console.log('cursor', cursor);
  }, [cursor]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      getList();
    }
  };

  const getDiaryList = async () => {
    console.log('1');
    const res = await Api.get('diary/list');
    const sliceData = res.data.slice(0, 9);
    console.log('1', res.data.slice(-1)[0].cursor);
    setCursor(res.data.slice(-1)[0].cursor);
    setDiaryList([...sliceData]);
  };

  const getList = async () => {
    try {
      console.log('2', cursor);
      const res = await Api.get(`diary/list/?cursor=${cursor}`);
      const sliceData = res.data.slice(0, 9);
      console.log('2', res.data.slice(-1)[0].cursor);
      setCursor(res.data.slice(-1)[0].cursor);
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
