import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as Api from '../api';
import axios from 'axios';
import ChallengeCard from '../components/challenge/ChallengeCard';

// 달력, 설명
const UserMainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContent = styled.div`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 1.4rem;
  line-height: 2rem;
  margin-top: 2rem;
  margin-left: 13rem;
  margin-bottom: 1rem;
  span {
    color: #3d2c8d;
  }
`;

const ChallengeContainer = styled.div`
  position: absolute;
  width: 1124px;
  height: 15rem;
  background: rgba(243, 240, 255, 0.5);
  box-shadow: 1px 3px 1px #dadce0;
  border-radius: 20px;
`;

const ChallengeTitle = styled.div`
  font-family: 'EliceDigitalBaeum_Bold';
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin-left: 6rem;
  span {
    color: #3d2c8d;
  }
`;

const UserMain = () => {
  const [user, setUser] = useState({}); // 백에서 받아오는 user정보
  const [registerDate, setRegisterDate] = useState();

  useEffect(() => {
    mockOpen();
  }, []);

  const mockOpen = async () => {
    const mainUrl = 'https://12team.com/user/1234';
    const challengeUrl = 'https://12team.com/userChallenge/1234';
    await axios
      .all([axios.get(mainUrl), axios.get(challengeUrl)])
      .then(
        axios.spread((r1, r2) => {
          const res1 = r1.data;
          const res2 = r2.data;
          const res = { ...res1, ...res2 };
          setUser(res);
          getDateDiff(res.inserted_at); // 적용되기 전에 불렀다.
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  const getDateDiff = (d1) => {
    const date = new Date(d1);
    const now = new Date();
    const diffDate = date.getTime() - now.getTime();
    const dateDays = Math.floor(diffDate / (1000 * 60 * 60 * 24)) * -1 + 1;
    setRegisterDate(dateDays);
  };

  return (
    <>
      <TextContent>
        안녕하세요. <span>{user.name}</span>님! <br />
        저희와 <span>{registerDate}</span>일째 인연을 지속하고 계시네요.
      </TextContent>
      <UserMainContainer>
        <ChallengeContainer>
          {user.is_broken ? (
            <>
              <ChallengeTitle>
                현재 진행 중인 챌린지가 없습니다. ㅠ.ㅠ
              </ChallengeTitle>
            </>
          ) : (
            <>
              <ChallengeCard user={user} />
            </>
          )}
        </ChallengeContainer>
      </UserMainContainer>
    </>
  );
};

export default UserMain;
