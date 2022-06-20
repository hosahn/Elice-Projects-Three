import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainCurrentChallenge from './MainCurrentChallenge';
import MainCallengeInfo from './MainChallengeInfo';
import useGetChallenge from '../../hooks/useGetChallenge';
import Nav from '../../components/nav/Nav';
import styled from 'styled-components';

import {
  MainTitle,
  SubContext,
  HighLightPurple,
  MainContainer,
} from '../../styles/CommonStyle';
import Calendar from './Calendar';
import MainDiaryList from './MainDiaryList';

const UserMain = () => {
  const [user, setUser] = useState({}); // 백에서 받아오는 user정보
  const { getDateDiff, date } = useGetChallenge();

  useEffect(() => {
    mockOpen();
  }, []);

  const mockOpen = async () => {
    const mainUrl = 'https://12team.com/user/1234';
    const challengeUrl = 'https://12team.com/userChallenge/1234';
    await axios
      .all([axios.get(mainUrl), axios.get(challengeUrl)])
      .then(
        axios.spread((r1, r2) => {
          const res1 = r1.data;
          const res2 = r2.data;
          const res = { ...res1, ...res2 };
          setUser(res);
          getDateDiff(res.inserted_at); // 적용되기 전에 불렀다.
        })
      )
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <>
      <Nav />
      <SubContext>
        안녕하세요. <HighLightPurple>{user.name}</HighLightPurple>님! 저희와{' '}
        <HighLightPurple>{date}</HighLightPurple>일째 인연을 지속하고 계시네요.
      </SubContext>
      {/* <MainChallenge /> */}
      <UserMainContainer>
        <ContentsContainer>
          <MainCurrentChallenge />
          <MainDiaryList />
        </ContentsContainer>
        <Calendar />
      </UserMainContainer>
    </>
  );
};

export default UserMain;

const UserMainContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 400px 2fr;
  place-items: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 300px;
  margin-top: 50px;
`;
