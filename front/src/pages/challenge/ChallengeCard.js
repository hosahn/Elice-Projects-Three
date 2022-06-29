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
import changeUtc from '../../utils/changeUtc';

const ChallengeCard = ({
  it,
  disabled,
  currentChallenge,
  setIsLoaded,
  setCurrentChallenge,
}) => {
  const { name, description, id } = it;
  const lock = false;

  useEffect(() => {
    console.log(disabled);
  }, []);

  const clickStart = async (e) => {
    try {
      const res = await Api.get(`challenge/start/${e.target.id}`);
      console.log(res.data);
      setIsLoaded((prev) => !prev);
    } catch (err) {
      alert('챌린지 신청 실패');
    }
  };

  const clickStop = async (e) => {
    try {
      const res = await Api.get(`challenge/stop/${e.target.id}`);
      console.log(res.data);
      setIsLoaded((prev) => !prev);
      setCurrentChallenge('');
    } catch (err) {
      alert('챌린지 취소 실패');
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
            {/* {descriptionOne} <br />
            {descriptionTwo}
            <br /> */}
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
