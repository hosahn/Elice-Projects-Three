import React, { useEffect, useState } from 'react';
import * as Api from '../../api';
import { NavWrap, Btn, UserBtn, HighLight } from '../../styles/NavStyle';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useResetRecoilState } from 'recoil';
import {
  activeState,
  challengeState,
  emotionState,
  userState,
  randomListState,
} from '../../atoms';

const Nav = () => {
  const navigate = useNavigate();
  const resetUser = useResetRecoilState(userState);
  const emotion = useResetRecoilState(emotionState);
  const active = useResetRecoilState(activeState);
  const randomList = useResetRecoilState(randomListState);
  const challenge = useResetRecoilState(challengeState);

  const logoutHandler = async () => {
    try {
      const res = await Api.get('user/logout');
      if (res.data === true) {
        resetUser();
        emotion();
        active();
        randomList();
        challenge();
        navigate('/');
      } else {
        alert('로그아웃에 실패하였습니다.');
        navigate('/');
      }
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        console.error('data : ', data);
        navigate('/');
      }
    }
  };

  return (
    <NavWrap>
      <Btn onClick={() => navigate('/challenge')}>
        <HighLight>챌린지</HighLight>
      </Btn>
      <Btn onClick={() => navigate('/report')}>
        <HighLight>리포트</HighLight>
      </Btn>
      <Btn onClick={() => navigate('/diaryEditor')}>
        <HighLight>일기 쓰기</HighLight>
      </Btn>
      <Btn onClick={() => navigate('/note')}>
        <HighLight>전체 일기</HighLight>
      </Btn>
      <Btn onClick={logoutHandler}>
        <HighLight>로그아웃</HighLight>
      </Btn>
      <UserBtn onClick={() => navigate('/usermain')}>
        <FontAwesomeIcon icon={faCircleUser} className="user" />
      </UserBtn>
    </NavWrap>
  );
};

export default Nav;
