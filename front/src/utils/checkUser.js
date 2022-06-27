import React, { useEffect, useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { getUserSelector } from '../atoms';

const useCheckUser = () => {
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

  return user;
};

export default useCheckUser;
