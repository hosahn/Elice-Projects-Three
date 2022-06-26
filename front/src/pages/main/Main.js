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

const UserMain = () => {
  const [user, setUser] = useState(''); // 백에서 받아오는 user정보
  const { getDateDiff, date } = useGetChallenge();
  const navigate = useNavigate();
  useEffect(() => {
    getUser();
  });

  useEffect(() => {
    getConfirm();
  });

  const getConfirm = async () => {
    console.log('Get');
    const res = await Api.get('confirmed/fortune');
    console.log(res.data);
  };

  const getUser = async () => {
    try {
      const res = await Api.get('user/info');
      console.log(res);
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        console.error('data : ', data);
        alert('로그인한 사용자가 아닙니다.');
        navigate('/login');
      }
    }
  };

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
