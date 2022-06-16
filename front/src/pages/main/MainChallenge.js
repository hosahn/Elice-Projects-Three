import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BarWrap, Filter, Label } from '../../styles/ProgressStyle';
import Cards from '../../components/card/Cards';
import useGetChallenge from '../../hooks/useGetChallenge';

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CurrentChallenge = user => {
  const { getDateDiff, round } = useGetChallenge();

  useEffect(() => {
    getDateDiff(user.user.start_date);
  }, [user]);

  return (
    <>
      <ProgressBarContainer>
        <BarWrap>
          <Filter completed={round - 1}>
            <Label>{`${round - 1}회차`}</Label>
          </Filter>
        </BarWrap>
      </ProgressBarContainer>
      <ProgressBarContainer>
        <Cards width={17} height={10} containerWdith={60} margin={6} />
      </ProgressBarContainer>
    </>
  );
};

export default CurrentChallenge;
