import React, { useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import styled from 'styled-components';
import Calendar from './Calendar';
import MainDiaryList from './MainDiaryList';
import { useNavigate } from 'react-router-dom';
import MainInfo from './MainInfo';
import * as Api from '../../api';
import { userState, loginState } from '../../atoms';
import { useSetRecoilState } from 'recoil';

const UserMain = () => {
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(userState);
  const setLoginState = useSetRecoilState(loginState);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await Api.get('user/info');
      setUserState(res.data);
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
          <MainInfo />
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
