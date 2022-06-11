import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChallengeCard from './mainCard/ChallengeCard';
import {
  MainTitle,
  SubContext,
  HighLightPurple,
  MainContainer,
} from '../../styles/CommonStyle';
import { MiainChallengeContainer } from '../../styles/MainStyle';

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
      <SubContext>
        안녕하세요. <HighLightPurple>{user.name}</HighLightPurple>님! <br />
        저희와 <HighLightPurple>{registerDate}</HighLightPurple>일째 인연을
        지속하고 계시네요.
      </SubContext>
      <MainContainer>
        <MiainChallengeContainer>
          {user.is_broken ? (
            <>
              <MainTitle>현재 진행 중인 챌린지가 없습니다. ㅠ.ㅠ</MainTitle>
            </>
          ) : (
            <>
              <ChallengeCard user={user} props={'안녕'} />
            </>
          )}
        </MiainChallengeContainer>
      </MainContainer>
    </>
  );
};

export default UserMain;
