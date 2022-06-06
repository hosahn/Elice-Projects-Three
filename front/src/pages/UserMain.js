import React from 'react';
import Nav from '../components/nav/Nav';
import ProgressBar from '../components/challenge/ProgressBar';
import styled from 'styled-components';

// 달력, 설명
const UserMainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TextContent = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  margin-top: 2rem;
  margin-left: 6rem;
`;

const ChallengeContainer = styled.div`
  position: absolute;
  width: 1124px;
  height: 236px;
  background: rgba(243, 240, 255, 0.5);
  box-shadow: 1px 3px 1px #dadce0;
  border-radius: 20px;
`;

const UserMain = () => {
  return (
    <>
      <Nav />
      <TextContent>
        <p>안녕하세요. 광천님!</p>
        <p> 저희와 200일째 인연을 지속하고 계시네요.</p>
      </TextContent>
      <UserMainContainer>
        <ChallengeContainer>
          <TextContent>
            <p>현재 </p>
          </TextContent>
          <ProgressBarContainer>
            <ProgressBar completed={30} />
          </ProgressBarContainer>
        </ChallengeContainer>
      </UserMainContainer>
    </>
  );
};

export default UserMain;
