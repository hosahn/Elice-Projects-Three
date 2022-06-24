import React, { useEffect, useState } from 'react';
import MainCurrentChallenge from './MainCurrentChallenge';
import useGetChallenge from '../../hooks/useGetChallenge';
import Nav from '../../components/nav/Nav';
import styled from 'styled-components';

import { SubContext, HighLightPurple } from '../../styles/CommonStyle';
import Calendar from './Calendar';
import MainDiaryList from './MainDiaryList';

const UserMain = () => {
  const [user, setUser] = useState(''); // 백에서 받아오는 user정보
  const { getDateDiff, date } = useGetChallenge();

  return (
    <>
      <Nav />
      <SubContext>
        안녕하세요. <HighLightPurple>{user.name}</HighLightPurple>님! 저희와{' '}
        <HighLightPurple>{date}</HighLightPurple>일째 인연을 지속하고 계시네요.
      </SubContext>
      <UserMainContainer>
        <ContentsContainer>
          <MainCurrentChallenge />
          <MainDiaryList />
        </ContentsContainer>
        <Calendar setUser={setUser} />
      </UserMainContainer>
    </>
  );
};

export default UserMain;

const UserMainContainer = styled.div`
  position: relative;
  margin-top: 90px;
  display: grid;
  grid-template-columns: 400px 2fr;
  place-items: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 300px;
`;
