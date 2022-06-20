import React, { useEffect } from 'react';
import useGetChallenge from '../../hooks/useGetChallenge';
import {
  MainContext,
  HighLightPink,
  ExplainContext,
} from '../../styles/CommonStyle';

const MainCallengeInfo = (user) => {
  const { challengeDate, round, getDateDiff } = useGetChallenge();

  return (
    <>
      <MainContext>
        현재 <HighLightPink>매일쓰기 챌린지</HighLightPink>에{' '}
        <HighLightPink>12</HighLightPink>
        일째 도전 중 입니다.🏁 <br />
      </MainContext>
    </>
  );
};

export default MainCallengeInfo;
