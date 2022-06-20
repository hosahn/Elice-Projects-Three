import styled from 'styled-components';

const MainDiaryList = () => {
  return (
    <DiaryListContainer>
      <div>
        <span>🎲 오늘의 일기</span>
      </div>
      <DiaryCard>랜덤일기1</DiaryCard>
      <DiaryCard>랜덤일기2</DiaryCard>
      <DiaryCard>랜덤일기3</DiaryCard>
    </DiaryListContainer>
  );
};

export default MainDiaryList;

const DiaryListContainer = styled.div`
  background-color: #eff0f2;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  margin-top: 10px;
  padding: 20px;
  span {
    font-size: 20px;
    font-family: 'EliceDigitalBaeum';
  }
`;

const DiaryCard = styled.button`
  background-color: ${({ theme }) => theme.color.lightGrayBg};
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px 20px;
  margin: 20px 0px;
  span {
    font-family: 'InfinitySans-RegularA1';
  }
  :hover {
    background-color: #f8f0fc;
  }
`;
