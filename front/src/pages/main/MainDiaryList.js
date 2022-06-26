import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as Api from '../../api';

const MainDiaryList = () => {
  const navigate = useNavigate();
  const [getDiary, setGetDiary] = useState([]);
  useEffect(() => {
    getRandomList();
  }, []);

  const getRandomList = async () => {
    try {
      const res = await Api.get('diary/random/list');
      setGetDiary(res.data);
      console.log(res.data);
    } catch (err) {
      alert('에러 발생');
    }
  };

  const clickDiary = (e) => {
    const diaryId = e.target.id;
    navigate(`/diary/${diaryId}`, { state: diaryId });
    console.log(e.currentTarget.name);
  };

  return (
    <DiaryListContainer>
      <div>
        <span>🎲 오늘의 일기</span>
      </div>
      {getDiary.map((it) => (
        <DiaryCard onClick={clickDiary} id={it.id} key={it.id}>
          {it.title}
        </DiaryCard>
      ))}
    </DiaryListContainer>
  );
};

export default MainDiaryList;

const DiaryListContainer = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 10px;
  margin-top: 20px;
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
