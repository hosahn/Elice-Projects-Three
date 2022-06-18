import React, { useEffect, useState } from 'react';
import Modal from '../../components/modal/Modal';
import images from '../../assets/images';
import styled from 'styled-components';
import FAMOUSSAYING from '../../dummy/FAMOUSSAYING';
import { useNavigate } from 'react-router-dom';
import { MainTitle } from '../../styles/CommonStyle';
import Btn from '../../components/Btn';

const Img = styled.img`
  width: 150px;
  height: 150px;
`;

const BtnContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 5px;
  margin-top: 70px;
`;

const AnswerContainer = styled.div`
  margin-top: 150px;
`;

const DiaryModal = () => {
  const navigate = useNavigate();
  const [clickCookie, setClickCookie] = useState(true);
  const [answer, setAnswer] = useState('');
  const numList = [];

  useEffect(() => {
    randomNum();
  });

  const randomNum = () => {
    for (let i = 0; i < 3; i++) {
      const num = Math.floor(Math.random() * 5);
      if (numList.indexOf(num) === -1) {
        numList.push(num);
      } else {
        i--;
      }
    }
  };

  const selectCookie = (e) => {
    const select = e.currentTarget.id;
    setClickCookie((prev) => !prev);
    setAnswer(FAMOUSSAYING[numList[select]].sentence);
  };

  const clickModal = () => {
    navigate(`/usermain`);
  };

  return (
    <Modal>
      {clickCookie ? (
        <BtnContainer>
          <button id="0" onClick={selectCookie}>
            <Img src={images.FortuneCookie} alt="fortune" />
          </button>
          <button id="1" onClick={selectCookie}>
            <Img src={images.FortuneCookie} alt="fortune" />
          </button>
          <button id="2" onClick={selectCookie}>
            <Img src={images.FortuneCookie} alt="fortune" />
          </button>{' '}
        </BtnContainer>
      ) : (
        <AnswerContainer>
          <MainTitle>{answer}</MainTitle>
          <Btn text={'확인'} onClick={clickModal} />
        </AnswerContainer>
      )}
    </Modal>
  );
};

export default DiaryModal;
