import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BarWrap, Filter, Label } from '../../styles/ProgressStyle';
import Cards from '../../components/card/Cards';
import useGetChallenge from '../../hooks/useGetChallenge';
import CardContainer from '../../components/card/CardContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import COLOR from '../../dummy/COLOR';
import MainCallengeInfo from './MainChallengeInfo';

const ChallengeContainer = styled.div`
  background-color: #eff0f2;
  width: 400px;
  height: 200px;
  border-radius: 10px;
`;

const MainCurrentChallenge = (user) => {
  return (
    <ChallengeContainer>
      <MainCallengeInfo />
    </ChallengeContainer>
  );
};

export default MainCurrentChallenge;
