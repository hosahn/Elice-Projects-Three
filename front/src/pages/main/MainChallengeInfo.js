import React, { useEffect } from 'react';
import useGetChallenge from '../../hooks/useGetChallenge';
import {
  MainContext,
  HighLightPink,
  ExplainContext,
} from '../../styles/CommonStyle';

const MainCallengeInfo = (user) => {
  const { challengeDate, round, getDateDiff } = useGetChallenge();

  useEffect(() => {
    getChallengeInfo();
  }, [user]);

  const getChallengeInfo = () => {
    getDateDiff(user.user.start_date);
  };

  return (
    <>
      <MainContext>
        현재 <HighLightPink>{user.user.challengeName} 챌린지</HighLightPink>에{' '}
        <HighLightPink>{challengeDate}</HighLightPink>
        일째 도전 중 입니다.🏁 <br />
      </MainContext>
      <ExplainContext left={6} bottom={1}>
        현재까지 달성률은 {(round - 1) * 10}%입니다. <br />
      </ExplainContext>
    </>
  );
};

export default MainCallengeInfo;
