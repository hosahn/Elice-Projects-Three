import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import images from '../assets/images';
import LandingNav from '../components/nav/LandingNav';

const MainContainer = styled.div`
  position: relative;
  height: 100vh;
`;

const Landing = () => {
  return (
    <MainContainer>
      <LandingNav />
      <div style={{ marginLeft: '1000px', marginTop: '100px' }}>
        <img src={images.StackOfBooks} />
      </div>
    </MainContainer>
  );
};

export default Landing;
