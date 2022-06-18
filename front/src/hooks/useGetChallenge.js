import React, { useState, useEffect } from 'react';

const useGetChallenge = () => {
  const [date, getDate] = useState('');
  const [challengeDate, setChallengeDate] = useState();
  const [roundDate, setRoundDate] = useState();
  const [roundFinishDate, setRoundFinishDate] = useState();
  const [round, setRound] = useState();

  const getDateDiff = (value) => {
    const date = new Date(value);
    const now = new Date();
    const diffDate = date.getTime() - now.getTime();
    const dateDays = Math.floor(diffDate / (1000 * 60 * 60 * 24)) * -1 + 1;
    getDate(dateDays);
    const temp = parseInt(dateDays / 10) + 1;
    setRound(temp);
    setRoundDate(13 - (dateDays % 10));
    const a = temp * 10;
    const finishDay = new Date(date.setDate(date.getDate() + a));
    const setFinishDay = `${finishDay.getFullYear()}년 ${
      finishDay.getMonth() + 1
    }월 ${finishDay.getDate()}일`;
    setRoundFinishDate(setFinishDay);
    setChallengeDate(dateDays);
  };

  return {
    date,
    challengeDate,
    roundDate,
    roundFinishDate,
    round,
    getDateDiff,
  };
};

export default useGetChallenge;
