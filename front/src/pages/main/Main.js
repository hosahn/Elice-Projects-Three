import React from 'react';
import Nav from '../../components/nav/Nav';
import styled from 'styled-components';
import Calendar from './Calendar';
import MainDiaryList from './MainDiaryList';
import MainInfo from './MainInfo';
import useCheckUser from '../../utils/checkUser';
import { useRecoilValueLoadable } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { getUserSelector } from '../../atoms';

const UserMain = () => {
  const navigate = useNavigate();
  const userLoadable = useRecoilValueLoadable(getUserSelector);

  let user = ' ';
  switch (userLoadable.state) {
    case 'hasValue':
      user = userLoadable.contents;
      break;
    case 'hasError':
      if (window.confirm('로그인 먼저해주세요..!')) {
        navigate('/login');
      } else {
        navigate('/');
      }
      break;
    case 'loading':
      user = 'Loading...';
      break;
    default:
      user = 'Loading...';
  }

  return (
    <>
      <Nav />
      <UserMainContainer>
        <ContentsContainer>
          <MainInfo user={user} />
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
