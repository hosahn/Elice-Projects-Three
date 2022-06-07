import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const NavWrap = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #c996cc;
  button {
    border: none;
    margin-right: 30px;
    background-color: transparent;
    cursor: pointer;
    font-size: 15px;
  }
`;

const Btn = styled.button`
  margin-right: 10px;
  color: white;
  font-weight: bold;
`;

const UserBtn = styled.button`
  color: white;
`;

const HighLight = styled.div`
  &:hover {
    background-image: linear-gradient(transparent 60%, #f8cd07 40%);
  }
`;

const Nav = () => {
  const navigate = useNavigate();

  return (
    <NavWrap>
      <Btn>
        <HighLight>챌린지</HighLight>
      </Btn>
      <Btn>
        <HighLight>리포트</HighLight>
      </Btn>
      <Btn onClick={() => navigate('/diaryEditor')}>
        <HighLight>일기 쓰기</HighLight>
      </Btn>
      <Btn>
        <HighLight>전체 일기</HighLight>
      </Btn>
      <UserBtn onClick={() => navigate('/usermain')}>
        <FontAwesomeIcon icon={faCircleUser} className="user" />
      </UserBtn>
    </NavWrap>
  );
};

export default Nav;
