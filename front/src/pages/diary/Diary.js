import React, { useEffect, useState } from 'react';
import Tag from './DiaryTag';
import Title from './DiaryTitle';
import DiaryEditor from './DiaryEditor';
import Text from './DiaryText';
import Nav from '../../components/nav/Nav';
import { DiaryContext } from '../../styles/DiaryStyle';
import * as Api from '../../api';
import snackBar from '../../components/snackBar';
import { useNavigate } from 'react-router-dom';

const Diary = () => {
  const [title, setTitle] = useState('');
  const [inputTag, setInputTag] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      await Api.get('user/info');
    } catch (err) {
      snackBar('error', '로그인 후 서비스 이용 가능합니다.');
      navigate('/login');
    }
  };

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
