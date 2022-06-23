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
  font-size: 25px;
  font-family: 'EliceDigitalBaeum_Bold';
  color: black;
  text-align: center;
  margin-bottom: 20px;
`;

export const Desc = styled.h2`
  color: black;
  font-family: 'EliceDigitalBaeum_Bold';
  margin-left: 50px;
`;

export const ChartDesc = styled.div`
  margin-top: '60px';
  display: flex;
  align-items: center;
  // justify-content: center;
  width: 700px;
  height: 200px;
  // text-align: center;
`;

export const Tag = styled.h2`
  margin-top: 100px;
  color: black;
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 30px;
  text-align: center;
  color: #00bfff;
`;

// export const DescWrap = styled.div`
//   font-size: 20px;
//   font-weigth: 500;
//   line-height: 25px;
//   padding-top: 20px;
//   h1 {
//     font-size: 25px;
//     margin-bottom: 10px;
//     color: ${props => (props.lock === true ? '#495057' : 'black')};
//   }
// `;

export const ChallDesc = styled.h2`
  color: black;
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 20px;
  // text-align: center;
  margin-top: 70px;
  margin-left: 230px;
`;
