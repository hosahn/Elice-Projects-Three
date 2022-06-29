import React, { useEffect, useState } from 'react';
import Tag from './DiaryTag';
import Title from './DiaryTitle';
import DiaryEditor from './DiaryEditor';
import Text from './DiaryText';
import Nav from '../../components/nav/Nav';
import { DiaryContext } from '../../styles/DiaryStyle';

const Diary = () => {
  const [title, setTitle] = useState('');
  const [inputTag, setInputTag] = useState('');

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
