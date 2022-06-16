import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Btn from '../components/Btn';
import { getDate } from '../utils/getDay';

export default function Introduction() {
  const navigate = useNavigate();

  return (
    <div>
      <p>소개 페이지입니다. </p>
      <Btn text={'로그인'} onClick={() => navigate('/login')} />
      <Btn text={'회원가입'} onClick={() => navigate('/register')} />
    </div>
  );
}
