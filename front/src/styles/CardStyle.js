import styled from 'styled-components';

// battlepass 17rme /10rem
// challenge  10rem/17rem

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => `${props.width}rem`};
  height: ${(props) => `${props.height}rem`};
  text-align: center;
  background-color: ${({ theme }) => theme.color.subPink};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 25px 0px;
  border-radius: 1rem;
`;
