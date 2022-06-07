import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const SubTextContent = styled.div`
  font-family: 'EliceDigitalBaeum';
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin-left: 6rem;
  span {
    font-family: EliceDigitalBaeum_Bold;
    color: #e64980;
    font-weight: 900;
  }
`;

const ChallengeTitle = styled.div`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin-left: 6rem;
  span {
    color: #e64980;
  }
`;

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
      <ChallengeTitle>
        현재 <span>{user.user.challengeName} 챌린지</span>에{' '}
        <span>{challengeDate}</span>
        일째 도전 중 입니다.🏁 <br />
      </ChallengeTitle>
      <SubTextContent>
        현재까지 달성률은 {(round - 1) * 10}%입니다. <br />
        <span>{round}</span>회차 종료일 <span>{roundFinishDate}</span>까지{' '}
        <span>{roundDate}</span>
        일 남았어요.😊 <br />
      </SubTextContent>
      <ProgressBarContainer>
        <ProgressBar completed={round - 1} />
      </ProgressBarContainer>
    </>
  );
};

export default ChallengeCard;
