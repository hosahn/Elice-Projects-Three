import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userState } from '../../atoms';

const MainUserInfo = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  useEffect(() => {
    console.log(user.daily_check);
  }, []);

  return (
    <InfoContainer>
      {user.daily_check ? (
        <SubContext>
          <span>오늘 일기를 작성하셨네요.👍</span>
        </SubContext>
      ) : (
        <>
          <DiaryContext>
            <span>아직 오늘의 일기를 안 쓰셨네요 ㅠㅠ</span>
            <button onClick={() => navigate('/diaryEditor')}>
              일기 작성하러 가기
            </button>
          </DiaryContext>
        </>
      )}
    </InfoContainer>
  );
};

export default MainUserInfo;

const SubContext = styled.div`
  font-family: 'EliceDigitalBaeum';
  font-size: 20px;
  line-height: 25px;
  height: 50px;
  font-family: 'KyoboHand';
  margin-top: 10px;
  padding: 20px;
  span {
    background-image: linear-gradient(transparent 60%, #a5d8ff 40%);
  }
`;

const DiaryContext = styled.div`
  border-radius: 10px;
  background-color: #e9ecef;
  font-size: 18px;
  line-height: 25px;
  font-family: 'KyoboHand';
  margin-top: 10px;
  padding: 20px;
  height: 100px;
  span {
    font-family: 'EliceDigitalBaeum';
    background-image: linear-gradient(transparent 60%, #a5d8ff 40%);
  }
  button {
    margin-top: 20px;
  }
`;

const InfoContainer = styled.div`
  border-radius: 10px;
  margin-bottom: 15px;
  button {
    float: right;
    margin-right: 15px;
    &:hover {
      color: #4dabf7;
      background-image: linear-gradient(transparent 60%, #a5d8ff 40%);
    }
  }
`;
