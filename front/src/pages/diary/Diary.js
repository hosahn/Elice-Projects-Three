import React, { useEffect, useState } from 'react';
import Tag from './DiaryTag';
import Title from './DiaryTitle';
import DiaryEditor from './DiaryEditor';
import Text from './DiaryText';
import Nav from '../../components/nav/Nav';
import { DiaryContext } from '../../styles/DiaryStyle';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../atoms';
import snackBar from '../../components/snackBar';
import { useNavigate } from 'react-router-dom';

const Diary = () => {
  const [title, setTitle] = useState('');
  const [inputTag, setInputTag] = useState('');
  const login = useRecoilValue(loginState);
  const navigate = useNavigate();

  useEffect(() => {
    if (login === false) {
      snackBar('error', '로그인 해주세요');
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <Nav />
      <div style={{ margin: '2rem' }}>
        <DiaryContext>
          <Text />
        </DiaryContext>
        <Title tite={title} setTitle={setTitle} />
        <Tag inputTag={inputTag} setInputTag={setInputTag} />
        <DiaryEditor title={title} tag={inputTag} />
      </div>
    </div>
  );
};

export default Diary;
