import React, { useEffect, useState, useReducer } from 'react';
import Tag from './Tag';
import Title from './Title';
import DiaryEditor from './DiaryEditor';
import Text from './Text';
import styled from 'styled-components';

const DiaryContext = styled.div`
  background-color: #f8f9fd;
  width: 50rem;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 1rem;
`;

const Diary = () => {
  return (
    <>
      <div style={{ margin: '2rem' }}>
        <DiaryContext>
          <Text />
        </DiaryContext>
        <Title />
        <Tag />
        <DiaryEditor />
      </div>
    </>
  );
};

export default Diary;
