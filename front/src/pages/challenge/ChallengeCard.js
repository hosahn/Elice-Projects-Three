import { useEffect } from 'react';
import images from '../../assets/images';
import {
  CardsContainer,
  CardTitle,
  CardWrapper,
  ExplainContext,
  TargetImg,
  StartBtn,
} from '../../styles/ChallengeStyle';
import * as Api from '../../api';
import snackBar from '../../components/snackBar';

const ChallengeCard = ({
  it,
  disabled,
  currentChallenge,
  setIsLoaded,
  setCurrentChallenge,
}) => {
  const { name, id, description, descriptionOne, descriptionTwo } = it;
  const lock = false;

  useEffect(() => {
    console.log(disabled);
  }, []);

  const clickStart = async (e) => {
    try {
      await Api.get(`challenge/start/${e.target.id}`);
      setIsLoaded((prev) => !prev);
    } catch (err) {
      snackBar('error', '다시 시도해주세요.');
    }
  };

  const clickStop = async (e) => {
    try {
      await Api.get(`challenge/stop/${e.target.id}`);
      setIsLoaded((prev) => !prev);
      setCurrentChallenge('');
    } catch (err) {
      snackBar('error', '다시 시도해주세요.');
    }
  };

  return (
    <CardsContainer>
      {lock ? (
        <>
          <CardWrapper>
            <div>
              <CardTitle lock={true}>🚧 공개 예정 🚧</CardTitle>
            </div>
          </CardWrapper>
          <ExplainContext lock={true}>
            <h1>👷🏻‍♂️현재 준비 중인 챌린지 입니다.</h1>
            <div style={{ marginTop: '35px' }}></div>
          </ExplainContext>
        </>
      ) : (
        <>
          <CardWrapper>
            <TargetImg src={images.Calendar} alt="Calendar" />
            <div>
              <CardTitle lock={false}>{name}</CardTitle>
            </div>
          </CardWrapper>
          <ExplainContext lock={false}>
            <h1>{description}</h1>
            {descriptionOne} <br />
            {descriptionTwo}
            <br />
            <div style={{ marginTop: '35px' }}>
              {name === currentChallenge ? (
                <StartBtn onClick={clickStop} id={id}>
                  포기할래요🥲
                </StartBtn>
              ) : (
                <StartBtn onClick={clickStart} id={id} disabled={disabled}>
                  {disabled ? '도전 중인 챌린지가 있어요.' : '도전하기🏁'}
                </StartBtn>
              )}
            </div>
          </ExplainContext>
        </>
      )}
    </CardsContainer>
  );
};

export default ChallengeCard;
