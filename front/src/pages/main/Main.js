import React, { useEffect, useState } from 'react';
import MainCurrentChallenge from './MainCurrentChallenge';
import useGetChallenge from '../../hooks/useGetChallenge';
import Nav from '../../components/nav/Nav';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SubContext, HighLightPurple } from '../../styles/CommonStyle';
import Calendar from './Calendar';
import MainDiaryList from './MainDiaryList';
import * as Api from '../../api';
import { useRecoilValue } from 'recoil';
import { getUserSelector } from '../../atoms';

const UserMain = () => {
  const user = useRecoilValue(getUserSelector);
  const { getDateDiff, date } = useGetChallenge();
  const navigate = useNavigate();

  useEffect(() => {
    getConfirm();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const getConfirm = async () => {
    console.log('Get');
    const res = await Api.get('confirmed/fortune');
    console.log(res.data);
  };

  return (
    <>
      <Nav />
      <SubContext>
        안녕하세요. <HighLightPurple>{}</HighLightPurple>님! 저희와{' '}
        <HighLightPurple>{date}</HighLightPurple>일째 인연을 지속하고 계시네요.
      </SubContext>
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
