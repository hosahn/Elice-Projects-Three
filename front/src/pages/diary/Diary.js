import React from 'react';
import Tag from './DiaryTag';
import Title from './DiaryTitle';
import DiaryEditor from './DiaryEditor';
import Text from './DiaryText';
import Nav from '../../components/nav/Nav';
import { DiaryContext } from '../../styles/DiaryStyle';

const Diary = () => {
  return (
    <div>
      <Nav />
      <div style={{ margin: '2rem' }}>
        <DiaryContext>
          <Text />
        </DiaryContext>
        <Title />
        <Tag />
        <DiaryEditor />
      </div>
    </div>
  );
};

export default Diary;
