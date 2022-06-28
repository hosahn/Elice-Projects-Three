import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userState } from '../../atoms';

const MainInfo = () => {
  const user = useRecoilValue(userState);
  const [challengeState, setChallengeState] = useState(false);

  useEffect(() => {
    console.log(user.user_challenge);
    if (user.user_challenge === 0) {
      console.log('챌린지 없다.');
    } else {
      console.log('챌린지 있다.');
    }
  }, [user]);

  return (
    <InfoContainer>
      <SubContext>
        {challengeState
          ? '현재 챌린지를 진행 중 입니다.'
          : '현재 진행 중인 챌린지는 없습니다.'}
      </SubContext>
    </InfoContainer>
  );
};

export default MainInfo;

const SubContext = styled.div`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 20px;
  line-height: 25px;
  font-family: 'KyoboHand';
  margin-top: 10px;
`;

const HighLightPurple = styled.span`
  color: ${({ theme }) => theme.color.mainPurple};
`;

const InfoContainer = styled.div`
  background-color: white;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 15px;
`;
