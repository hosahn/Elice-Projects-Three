import Nav from '../../components/nav/Nav';
import { MainContainer } from '../../styles/CommonStyle';
import { useState } from 'react';
import ReportCard from './ReportCard';
import { TitleWrap, ChallengeBtn, ChallengeTitle } from '../../styles/ChallengeStyle';

const Report = () => {
  return (
    <div>
      <Nav />

      <MainContainer>
        <TitleWrap>
          <ChallengeTitle>리포트</ChallengeTitle> {/* <ChallengeTitle>{name}님의 {year}년 {month}월의 리포트</ChallengeTitle> */}
        </TitleWrap>
        <ReportCard></ReportCard>
      </MainContainer>
    </div>
  );
};

export default Report;
