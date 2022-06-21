import styled from 'styled-components';

export const ReportContainer = styled.div`
  width: 100px;
  heigth: 50px;
  margin: 10px;
  padding: 10px;
  border-radius: 30%;
  background-color: ${({ theme }) => theme.color.subPurple};
`;

export const Title = styled.h1`
  font-size: 35px;
  font-family: 'EliceDigitalBaeum_Bold';
  color: black;
  left: -440px;
`;
