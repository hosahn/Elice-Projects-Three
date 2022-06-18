import styled from 'styled-components';

// battlepass 17rme /10rem
// challenge  10rem/17rem

<<<<<<< HEAD
export const CardContainer = styled.div`
=======
export const CardWrap = styled.div`
>>>>>>> origin/BE/test/HS
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => `${props.width}rem`};
  height: ${(props) => `${props.height}rem`};
  text-align: center;
<<<<<<< HEAD
  background-color: ${({ theme }) => theme.color.subPink};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 25px 0px;
  border-radius: 1rem;
`;
=======
  background-color: ${(props) => props.color};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 7px 10px 0px;
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
>>>>>>> origin/BE/test/HS
