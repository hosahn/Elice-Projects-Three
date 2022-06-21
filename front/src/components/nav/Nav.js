import React, { useEffect, useState } from 'react';
import * as Api from '../../api';
import { NavWrap, Btn, UserBtn, HighLight } from '../../styles/NavStyle';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useRecoilValue } from 'recoil';
import { writeState } from '../../atoms';

const Nav = () => {
  const navigate = useNavigate();
  const write = useRecoilValue(writeState);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (write === true) {
      setDisabled(true);
    }
  }, [write]);

  const logoutHandler = async e => {
    e.preventDefault();
    try {
      const res = await Api.get('user/logout');
      if (res.data === true) {
        navigate('/');
      } else {
        alert('로그아웃에 실패하였습니다.');
      }
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        console.error('data : ', data);
        alert('로그아웃에 실패하였습니다.');
      }
    }
  };

  return (
    <NavWrap>
      <Btn onClick={() => navigate('/challenge')}>
        <HighLight>챌린지</HighLight>
      </Btn>
      <Btn>
        <HighLight>리포트</HighLight>
      </Btn>
      <Btn onClick={() => navigate('/diaryEditor')} disabled={disabled}>
        <HighLight>일기 쓰기</HighLight>
      </Btn>
      <Btn onClick={() => navigate('/note')}>
        <HighLight>전체 일기</HighLight>
      </Btn>
      <Btn onClick={logoutHandler}>
        <HighLight>로그아웃</HighLight>
      </Btn>
      <UserBtn onClick={() => navigate('/usermain')}>
        <FontAwesomeIcon icon={faCircleUser} className='user' />
      </UserBtn>
    </NavWrap>
  );
};

export default Nav;
