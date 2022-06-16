import { useState } from 'react';
import Nav from '../../components/nav/Nav';
import CHALLENGE from '../../dummy/CHALLENGE';
import { MainContainer } from '../../styles/CommonStyle';
import ChallengeCard from './ChallengeCard';
import {
  TitleWrap,
  ChallengeBtn,
  ChallengeTitle,
} from '../../styles/ChallengeStyle';

const Challenge = () => {
  const clickFinishChallenge = () => {
    console.log('안녕하세요');
  };

  return (
    <div>
      <Nav />
      <div style={{ marginTop: '5rem' }}>
        <MainContainer>
          <TitleWrap>
            <ChallengeTitle>🎯챌린지</ChallengeTitle>
            <ChallengeBtn onClick={clickFinishChallenge}>
              <input type={'checkbox'} />
              진행한 챌린지
            </ChallengeBtn>
          </TitleWrap>
          {CHALLENGE.map((it) => (
            <ChallengeCard props={it} />
          ))}
        </MainContainer>
      </div>
    </div>
  );
};

export default Challenge;
