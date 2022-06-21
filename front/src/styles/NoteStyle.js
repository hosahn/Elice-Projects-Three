import styled from 'styled-components';

export const EmotionCard = styled.button`
  background-color: ${({ theme }) => theme.color.lightGrayBg};
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px 20px;
  margin-bottom: 20px;
  span {
    font-family: 'InfinitySans-RegularA1';
  }
`;

export const Title = styled.span`
  font-family: 'GothicA1-Light';
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;
`;

export const DiaryDate = styled.span`
  font-family: 'GothicA1-Light';
  font-weight: bold;
  font-size: 10px;
  margin-right: 10px;
`;

export const TitleContainer = styled.div`
  margin: 0px 20px;
`;

export const DateWrapper = styled.div`
  float: right;
`;

export const BtnContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  margin-right: 200px;
  margin-left: 200px;
  padding-bottom: 1px;
  weight: 800px;
  border-bottom: solid 1px #ced4da;
`;

export const NoteBtn = styled.button`
  font-family: 'InfinitySans-RegularA1';
  font-size: 20px;
  color: #868e96;
  margin-right: 50px;
  padding-bottom: 10px;
  &:focus {
    color: #862e9c;
    border-bottom: solid 3px #862e9c;
    outline: 0;
  }
`;

export const BoardContainer = styled.div`
  margin-right: 200px;
  margin-left: 200px;
`;

export const ViewContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;
  margin-right: 200px;
  margin-left: 200px;
`;

export const TiteWrapper = styled.div`
  margin-bottom: 30px;
  margin-left: 10px;
  border-bottom: solid 2px #ced4da;
  display: flex;
  flex-direction: rows;
  width: 100%;
`;

export const TagWrapper = styled.div`
  margin-bottom: 30px;
  margin-left: 10px;
`;

export const ContentWrapper = styled.div`
  min-height: 500px;
  background-color: #f8f9fa;
  margin-bottom: 20px;
  padding: 20px 30px;
  border-radius: 20px;
`;

//
export const DiaryTitle = styled.span`
  font-size: 35px;
  font-family: 'InfinitySans-RegularA1';
`;

export const DiaryTag = styled.span`
  font-size: 20px;
  font-family: 'EliceDigitalBaeum';
`;

export const IconWrapper = styled.div`
  font-size: 15px;
  color: #495057;
  cursor: pointer;
  float: right;
`;
