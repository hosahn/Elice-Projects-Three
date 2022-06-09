import React from 'react';
import { NavWrap, Btn, UserBtn, HighLight } from '../../styles/NavStyle';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

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
