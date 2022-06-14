import styled from 'styled-components';

export const ChallengeContainer = styled.div`
  width: 70rem;
  height: 15rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.purple};
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

export const ChallengeCardContainer = styled.div`
  width: 60rem;
  height: 2rem;
  background-color: white;
  opacity: 0.6;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  align-items: center;
`;

export const BattlePassContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin-left: ${(props) => `${props.margin}rem`};
  margin-right: ${(props) => `${props.margin}rem`};
  width: ${(props) => `${props.containerWdith}rem`};
`;

export const CardsContainer = styled.div`
  width: 300vw;
  height: 10vw;
  transition: transform 0.5s;
`;

export const CardWrap = styled.div`
  width: 7%;
  float: left;
`;
