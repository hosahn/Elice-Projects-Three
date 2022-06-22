import styled from 'styled-components';

export const ReportContainer = styled.div`
  width: 800px;
  height: 300px;
  margin: 30px;
  padding: 20px;

  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  ::after {
    background-color: ${({ theme }) => theme.color.subPurple};
    z-index: -1;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
  }
`;

export const RTitleWrap = styled.div`
  margin-top: 20px;
  display: flex;
  font-size: 40px;
  font-family: 'EliceDigitalBaeum_Bold';
`;

export const ReportTitle = styled.h1`
  font-size: 25px;
  font-family: 'EliceDigitalBaeum_Bold';
  color: black;
  text-align: center;
`;

export const DescTitle = styled.h1`
  margin-top: 20px;
  font-size: 20px;
  font-family: 'EliceDigitalBaeum_Bold';
  color: black;
  text-align: center;
`;
