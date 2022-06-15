import React from 'react';
import Tag from './DiaryTag';
import Title from './DiaryTitle';
import DiaryEditor from './DiaryEditor';
import Text from './DiaryText';
import styled from 'styled-components';
import Nav from '../../components/nav/Nav';

const DiaryContext = styled.div`
  background-color: #f8f9fd;
  width: 50rem;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 1rem;
`;

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
