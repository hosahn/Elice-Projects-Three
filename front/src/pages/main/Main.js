import React, { useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import styled from 'styled-components';
import Calendar from './Calendar';
import MainDiaryList from './MainDiaryList';
import { useNavigate } from 'react-router-dom';
import MainIChallengeInfo from './MainIChallengeInfo';
import * as Api from '../../api';
import { userState, loginState, challengeState } from '../../atoms';
import { useSetRecoilState } from 'recoil';
import MainUserInfo from './MainUserInfo';
import MainEmotionInfo from './MainEmotionInfo';

const UserMain = () => {
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(userState);
  const setChallengeState = useSetRecoilState(challengeState);
  const setLoginState = useSetRecoilState(loginState);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await Api.get('user/info');
      setUserState(res.data);
      setChallengeState(res.data.user_challenge);
      setLoginState(true);
    } catch (err) {
      navigate('/login');
    }
  };

  return (
    <>
      <Nav />
      <UserMainContainer>
        <ContentsContainer>
          <MainEmotionInfo />
          <MainUserInfo />
          <MainIChallengeInfo />
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
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 300px;
  width: 400px;
`;
