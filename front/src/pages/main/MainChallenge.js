<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import {
  MainContext,
  HighLightPink,
  ExplainContext,
  HighLightExplain,
} from '../../styles/CommonStyle';
import styled from 'styled-components';
import ProgressBar from './MainProgressBar';
import Cards from '../../components/card/Cards';
=======
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BarWrap, Filter, Label } from '../../styles/ProgressStyle';
import Cards from '../../components/card/Cards';
import useGetChallenge from '../../hooks/useGetChallenge';
import CardContainer from '../../components/card/CardContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import COLOR from '../../dummy/COLOR';

const ColorCardContainer = styled.div`
  width: 7%;
  float: left;
`;
>>>>>>> origin/BE/test/HS

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

<<<<<<< HEAD
const CurrentChallenge = (user) => {
  const [challengeDate, setChallengeDate] = useState();
  const [round, setRound] = useState();
  const [roundDate, setRoundDate] = useState();
  const [roundFinishDate, setRoundFinishDate] = useState();
=======
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 100px;
  padding: 0px 10px;
  height: 200px;
`;

const AwardWrapper = styled.div`
  font-size: 100px;
  color: ${(props) => (props.lock === true ? props.color : 'black ')};
`;

const CurrentChallenge = (user) => {
  const { getDateDiff, round } = useGetChallenge();
>>>>>>> origin/BE/test/HS

  useEffect(() => {
    getDateDiff(user.user.start_date);
  }, [user]);

<<<<<<< HEAD
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
        <HighLightExplain>{round}</HighLightExplain>회차 종료일{' '}
        <HighLightExplain>{roundFinishDate}</HighLightExplain>까지{' '}
        <HighLightExplain>{roundDate}</HighLightExplain>
        일 남았어요.😊 <br />
      </ExplainContext>
      <ProgressBarContainer>
        <ProgressBar completed={round - 1} />
      </ProgressBarContainer>
      <ProgressBarContainer>
        <Cards width={17} height={10} containerWdith={60} margin={6} />
      </ProgressBarContainer>
=======
  return (
    <>
      <ProgressBarContainer>
        <BarWrap>
          <Filter completed={round - 1}>
            <Label>{`${round - 1}회차`}</Label>
          </Filter>
        </BarWrap>
      </ProgressBarContainer>
      <CardsContainer>
        <Cards>
          {COLOR.map((it) => {
            return (
              <ColorCardContainer>
                <CardContainer
                  key={it.id}
                  width={15}
                  height={10}
                  color={'#ffffff'}
                >
                  <AwardWrapper color={it.color} lock={it.lock}>
                    <FontAwesomeIcon icon={faTrophy} className="award" />
                  </AwardWrapper>
                </CardContainer>
              </ColorCardContainer>
            );
          })}
        </Cards>
      </CardsContainer>
>>>>>>> origin/BE/test/HS
    </>
  );
};

export default CurrentChallenge;
