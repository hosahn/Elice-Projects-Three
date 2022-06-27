import React from 'react';
import Nav from '../../components/nav/Nav';
import styled from 'styled-components';
import Calendar from './Calendar';
import MainDiaryList from './MainDiaryList';
import MainInfo from './MainInfo';

const UserMain = () => {
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
