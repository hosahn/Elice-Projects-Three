import styled from 'styled-components';

export const ChallengeContainer = styled.div`
  width: 70rem;
  height: 15rem;
  padding: 1rem;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  overflow: auto;
  border-radius: 0.5rem;
  &::-webkit-scrollbar {
    width: 1rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
  }
`;

export const ChallengeCardWrapper = styled.div`
  width: 1000px;
  height: 50px;
  background-color: white;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  align-items: center;
`;

export const BattlePassContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin-left: ${(props) => `${props.margin}rem`};
  margin-right: ${(props) => `${props.margin}rem`};
  width: ${(props) => `${props.containerWdith}rem`};
`;
