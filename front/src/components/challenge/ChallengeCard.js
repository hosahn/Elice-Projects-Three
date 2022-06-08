import React, { useEffect, useState } from 'react';
import {
  MainContext,
  HighLightPink,
  ExplainContext,
  ExplainHighLight,
} from '../../styles/CommonStyle';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ChallengeCard = (user) => {
  const [challengeDate, setChallengeDate] = useState();
  const [round, setRound] = useState();
  const [roundDate, setRoundDate] = useState();
  const [roundFinishDate, setRoundFinishDate] = useState();

  useEffect(() => {
    getDateDiff(user.user.start_date);
  }, [user]);

  const getDateDiff = (d1) => {
    const date = new Date(d1);
    const now = new Date();
    const diffDate = date.getTime() - now.getTime();
    const dateDays = Math.floor(diffDate / (1000 * 60 * 60 * 24)) * -1 + 1; // 남은 일
    const temp = parseInt(dateDays / 10) + 1; // 몇 회차인지? 7회차 진행 중이라면 -> 8회차
    setRound(temp);
    setRoundDate(11 - (dateDays % 10));
    const a = temp * 10;
    const finishDay = new Date(date.setDate(date.getDate() + a));
    const setFinishDay = `${finishDay.getFullYear()}년 ${
      finishDay.getMonth() + 1
    }월 ${finishDay.getDate()}일`;
    setRoundFinishDate(setFinishDay);
    setChallengeDate(dateDays);
  };

  return (
    <>
      <MainContext>
        현재 <HighLightPink>{user.user.challengeName} 챌린지</HighLightPink>에{' '}
        <HighLightPink>{challengeDate}</HighLightPink>
        일째 도전 중 입니다.🏁 <br />
      </MainContext>
      <ExplainContext left={6}>
        현재까지 달성률은 {(round - 1) * 10}%입니다. <br />
        <ExplainHighLight>{round}</ExplainHighLight>회차 종료일{' '}
        <ExplainHighLight>{roundFinishDate}</ExplainHighLight>까지{' '}
        <ExplainHighLight>{roundDate}</ExplainHighLight>
        일 남았어요.😊 <br />
      </ExplainContext>
      <ProgressBarContainer>
        <ProgressBar completed={round - 1} />
      </ProgressBarContainer>
    </>
  );
};

export default ChallengeCard;
