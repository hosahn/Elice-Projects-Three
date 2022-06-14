import React from 'react';
import Container from './Container';
import { Background, fadeIn, Content } from '../../styles/ModalStyle';

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
