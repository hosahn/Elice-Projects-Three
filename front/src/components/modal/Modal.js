import React from 'react';
import Container from './Container';
import styled, { keyframes } from 'styled-components';

const Background = styled.div`
  height: 100%;
  width: 100%;
  z-index: 90;
  display: grid;
  place-items: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const fadeIn = keyframes`
from {
  opacity: 0;
  margin-top: -50px;
}
to {
  opacity: 1;
  margin-top: 0;
}
`;

const Content = styled.div`
  width: 600px;
  height: 350px;
  margin-top: 70px;
  position: relative;
  border-radius: 10px;
  background: #fff0f6;
  animation: ${fadeIn} 0.1s ease-out;
`;

const Modal = (props) => {
  return (
    <Container>
      <Background>
        <Content>
          <div>{props.children}</div>
        </Content>
      </Background>
    </Container>
  );
};

export default Modal;
