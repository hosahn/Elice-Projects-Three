import React, { useEffect, useState } from 'react';
import Tag from './DiaryTag';
import Title from './DiaryTitle';
import DiaryEditor from './DiaryEditor';
import Text from './DiaryText';
import Nav from '../../components/nav/Nav';
import { useNavigate } from 'react-router-dom';
import { DiaryContext } from '../../styles/DiaryStyle';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms';
import snackBar from '../../components/snackBar';

const Diary = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [inputTag, setInputTag] = useState('');
  const user = useRecoilValue(userState);

  useEffect(() => {
    if (user.length === 0) {
      snackBar('error', '로그인 후 서비스를 이용해주세요!');
      navigate('/');
    }
  });

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
