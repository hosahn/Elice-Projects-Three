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

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

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
    </>
  );
};

export default CurrentChallenge;
