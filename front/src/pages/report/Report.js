import DATALIST from '../../dummy/DATALIST';
import Nav from '../../components/nav/Nav';
import { MainContainer } from '../../styles/CommonStyle';
import { useState } from 'react';
import ReportCard from './ReportCard';
import { TitleWrap, ChallengeBtn, ChallengeTitle } from '../../styles/ChallengeStyle';
import { ReportTitle, RTitleWrap } from '../../styles/ReportStyle';

const Report = () => {
  // ({ props }) => {
  //   const { year, month } = props;
  console.log(DATALIST);
  return (
    <div>
      <Nav />

      <MainContainer>
        <RTitleWrap>
          <ReportTitle>
            🏁{DATALIST[0].year}년 {DATALIST[0].month}월🏁
          </ReportTitle>
        </RTitleWrap>
        <ReportCard></ReportCard>
      </MainContainer>
    </div>
  );
};

export default Report;
