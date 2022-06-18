<<<<<<< HEAD
import React, { useEffect, useState, useReducer } from 'react';
=======
import React from 'react';
>>>>>>> origin/BE/test/HS
import Tag from './DiaryTag';
import Title from './DiaryTitle';
import DiaryEditor from './DiaryEditor';
import Text from './DiaryText';
<<<<<<< HEAD
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
    <div style={{ margin: '2rem' }}>
      <DiaryContext>
        <Text />
      </DiaryContext>
      <Title />
      <Tag />
      <DiaryEditor />
=======
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
>>>>>>> origin/BE/test/HS
    </div>
  );
};

export default Diary;
