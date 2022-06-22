import REPORT from '../../dummy/REPORT';
import Nav from '../../components/nav/Nav';
import { MainContainer } from '../../styles/CommonStyle';
import { useState } from 'react';
import ReportCard from './ReportCard';
import { TitleWrap, ChallengeBtn, ChallengeTitle } from '../../styles/ChallengeStyle';

const Report = () => {
  // ({ props }) => {
  //   const { year, month } = props;
  console.log(REPORT);
  return (
    <div>
      <Nav />

      <MainContainer>
        <TitleWrap>
          <ChallengeTitle>
            {REPORT.year}년 {REPORT.month}월
          </ChallengeTitle>
        </TitleWrap>
        <ReportCard></ReportCard>
      </MainContainer>
    </div>
  );
};

export default Report;
