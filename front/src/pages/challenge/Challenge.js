import { useState } from 'react';
import Cards from '../../components/card/Cards';
import ChallengeList from './ChallengeList';
import { MainContainer } from '../../styles/CommonStyle';
import styled from 'styled-components';
import CardContainer from '../../components/card/CardContainer';
import MainText from '../../components/card/MainText';
import SubText from '../../components/card/SubTitle';
import CHALLENGE from '../../dummy/CHALLENGE';
import Btn from '../../components/Btn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import ChallengeModal from './ChallengeModal';
import Nav from '../../components/nav/Nav';

const CardsContainer = styled.div`
  width: 70rem;
  height: 400px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 5px;
`;

const CardWrap = styled.div`
  padding: 0px 20px;
  width: 8%;
  float: left;
`;

const AwardWrapper = styled.div`
  font-size: 100px;
  color: black;
`;

const Challenge = () => {
  const [open, setOpen] = useState(false);

  const clickChallenge = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <Nav />
      <div style={{ marginTop: '5rem' }}>
        <MainContainer>
          <ChallengeList />
          <CardsContainer>
            <Cards>
              {CHALLENGE.map((it, index) => {
                return (
                  <CardWrap>
                    {it.lock === false ? (
                      <CardContainer
                        key={index}
                        width={15}
                        height={20}
                        color={'#f3f0ff'}
                      >
                        <div style={{ marginTop: '1em' }}>
                          <MainText text={it.title} />
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                          <SubText text={it.description} />
                        </div>
                        <Btn text={'상세설명?'} onClick={clickChallenge} />
                      </CardContainer>
                    ) : (
                      <CardContainer
                        key={index}
                        width={15}
                        height={20}
                        color={'#dee2e6'}
                      >
                        <AwardWrapper>
                          <FontAwesomeIcon icon={faLock} className="award" />
                        </AwardWrapper>
                      </CardContainer>
                    )}
                  </CardWrap>
                );
              })}
            </Cards>
          </CardsContainer>
        </MainContainer>
        {open && <ChallengeModal />}
      </div>
    </div>
  );
};

export default Challenge;
