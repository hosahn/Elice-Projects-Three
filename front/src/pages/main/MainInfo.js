import React, { useEffect, useState } from 'react';
import useCheckUser from '../../utils/checkUser';
import getDateDiff from '../../utils/getDateDiff';
import styled from 'styled-components';

const MainInfo = (user) => {
  useEffect(() => {
    console.log(user.user_challenge);
  }, [user]);

  return (
    <InfoContainer>
      <SubContext>현재 {}를 진행 중입니다.</SubContext>
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
`;
