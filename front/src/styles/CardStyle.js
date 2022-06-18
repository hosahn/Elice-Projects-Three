import styled from 'styled-components';

// battlepass 17rme /10rem
// challenge  10rem/17rem

export const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => `${props.width}rem`};
  height: ${props => `${props.height}rem`};
  text-align: center;
  background-color: ${(props) => props.color};
  box-shadow: ${(props) =>
    props.shadow === 'true' ? 'rgba(0, 0, 0, 0.1) 0px 7px 10px 0px' : ''};
  border-radius: 1rem;
`;

export const BattlePassContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const CardsContainer = styled.div`
  width: 300vw;
  height: 10vw;
  transition: transform 0.5s;
`;
