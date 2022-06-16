import images from '../../assets/images';
import {
  CardsContainer,
  CardTitle,
  CardWrapper,
  ExplainContext,
  TargetImg,
  StartBtn,
} from '../../styles/ChallengeStyle';

const ChallengeCard = ({ props }) => {
  const { title, subTitle, descriptionOne, descriptionTwo, lock } = props;
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
              <CardTitle lock={false}>{title}</CardTitle>
            </div>
          </CardWrapper>
          <ExplainContext lock={false}>
            <h1>{subTitle}</h1>
            {descriptionOne} <br />
            {descriptionTwo}
            <br />
            <div style={{ marginTop: '35px' }}>
              <StartBtn>도전하기🏁</StartBtn>
            </div>
          </ExplainContext>
        </>
      )}
    </CardsContainer>
  );
};

export default ChallengeCard;
