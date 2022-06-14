import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProgressBar from './MainProgressBar';
import Cards from '../../components/card/Cards';
import useGetChallenge from '../../hooks/useGetChallenge';

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CurrentChallenge = (user) => {
  const { getDateDiff, round } = useGetChallenge();

  useEffect(() => {
    getDateDiff(user.user.start_date);
  }, [user]);

  return (
    <>
      <ProgressBarContainer>
        <ProgressBar completed={round - 1} />
      </ProgressBarContainer>
      <ProgressBarContainer>
        <Cards width={17} height={10} containerWdith={60} margin={6} />
      </ProgressBarContainer>
    </>
  );
};

export default CurrentChallenge;
