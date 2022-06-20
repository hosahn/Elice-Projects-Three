import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import images from '../assets/images';
import LandingNav from '../components/nav/LandingNav';

const MainContainer = styled.div`
  position: relative;
  height: 100vh;
  background-image: url(${images.Bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Landing = () => {
  return (
    <MainContainer>
      <LandingNav />
    </MainContainer>
  );
};

export default Landing;
