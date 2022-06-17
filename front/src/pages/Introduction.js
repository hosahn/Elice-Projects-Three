import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import images from '../assets/images';

const MainContainer = styled.div`
  position: relative;
  height: 100vh;
  background-image: url(${images.Bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Btn = styled.link`
  color: white;
`;

export default function Introduction() {
  return (
    <MainContainer>
      <Btn to="/login">로그인</Btn>
      <Btn to="/register">회원가입</Btn>
    </MainContainer>
  );
}
