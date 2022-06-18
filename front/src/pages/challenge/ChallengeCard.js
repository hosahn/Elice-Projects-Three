<<<<<<< HEAD
import { ChallengeCardContainer } from '../../styles/ChallengeStyle';
import { ExplainContext } from '../../styles/CommonStyle';

// 챌린지 받아온 정보
const ChallengeCard = () => {
  return <ChallengeCardContainer>dkdsfd</ChallengeCardContainer>;
=======
import styled from 'styled-components';
import { ChallengeCardWrapper } from '../../styles/ChallengeStyle';

const ChallengeText = styled.span`
  font-family: 'BMJUA';
  font-size: 20px;
`;

// 챌린지 받아온 정보
const ChallengeCard = () => {
  return (
    <ChallengeCardWrapper>
      <ChallengeText>🏆 50일쓰기 1회차를 성공하였습니다.</ChallengeText>
    </ChallengeCardWrapper>
  );
>>>>>>> origin/BE/test/HS
};

export default ChallengeCard;
