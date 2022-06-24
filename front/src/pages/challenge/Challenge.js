import { useEffect, useState } from 'react';
import Nav from '../../components/nav/Nav';
import { MainContainer } from '../../styles/CommonStyle';
import ChallengeCard from './ChallengeCard';
import {
  TitleWrap,
  ChallengeBtn,
  ChallengeTitle,
} from '../../styles/ChallengeStyle';
import * as Api from '../../api';

const Challenge = () => {
  const [challengeList, setChallengeList] = useState([]);
  const [currentChallenge, setCurrentChallenge] = useState([]);
  const [completedChallenge, setCompletedChallenge] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getChallenge();
  }, [isLoaded]);

  const getChallenge = async () => {
    const res = await Api.get('challenge');
    console.log(res.data.log.completed);
    setChallengeList(res.data.challenge);
    setDisabled(res.data.log.isRunning === true ? true : false);

    if (res.data.log.isRunning === true) {
      const indexFalse = res.data.log.completed.indexOf(false);
      setCurrentChallenge(res.data.log.challenge[indexFalse]);

      const indices = [];
      let array = res.data.log.completed;
      while (array != -1) {
        indices.push(array);
        array = res.data.log.completed.indexOf(true, array + 1);
      }
    }
  };

  const clickCompleteCard = () => {};

  return (
    <>
      <Nav />
      <div style={{ marginTop: '5rem' }}>
        <MainContainer>
          <TitleWrap>
            <ChallengeTitle>🎯챌린지</ChallengeTitle>
            <ChallengeBtn onClick={clickCompleteCard}>
              <input type={'checkbox'} />
              진행한 챌린지
            </ChallengeBtn>
          </TitleWrap>
          {challengeList.map((it) => (
            <ChallengeCard
              it={it}
              key={it.id}
              disabled={disabled}
              currentChallenge={currentChallenge}
              setIsLoaded={setIsLoaded}
              setCurrentChallenge={setCurrentChallenge}
            />
          ))}
        </MainContainer>
      </div>
    </>
  );
};

export default Challenge;
