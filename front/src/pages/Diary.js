import React, { useEffect, useState, useReducer } from 'react';
import styled from 'styled-components';
import Btn from '../components/Btn';
import Tag from '../components/diary/Tag';
import Title from '../components/diary/Title';
import DiaryEditor from '../components/diary/DiaryEditor';
import { diaryItemState } from '../atoms/DiaryAtom';
import { useRecoilState } from 'recoil';

const TextContent = styled.div`
  font-family: 'EliceDigitalBaeum';
  font-size: 1.4rem;
  line-height: 1.4rem;
  margin-top: 4rem;
  margin-left: 3rem;
  margin-bottom: 1rem;
  span {
    color: #3d2c8d;
  }
`;

const Diary = () => {
  return (
    <>
      <div style={{ margin: '2rem' }}>
        <Title />
        <Tag />
        <DiaryEditor />
        <div style={{ float: 'right', margin: '1rem' }}>
          <Btn text={'저장하기'} type={'main'} onClick />
        </div>
      </div>
    </>
  );
};

export default Diary;
