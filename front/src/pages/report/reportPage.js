import { useState, useEffect } from 'react';
import * as style from '../../styles/ReportStyle';
import EmotionGraph from '../../components/graph/emotionGraph';
import TimeGraph from '../../components/graph/timeGraph';
import Nav from '../../components/nav/Nav';
import moment from 'moment';
import TagRanking from '../../components/graph/allTagCount';
import { Background } from '../../styles/ModalStyle';
import { ClassicSpinner } from 'react-spinners-kit';
import * as Api from '../../api';
import snackBar from '../../components/snackBar';

const Report = () => {
  const [diaryEmotion, setDiaryEmotion] = useState({});
  const [diaryTime, setdiaryTime] = useState({});
  const today = moment();
  const [tags, setTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [challenge, setChallenge] = useState([]);

  useEffect(() => {
    allFunction();
  }, []);

  const allFunction = async () => {
    try {
      const data = await Api.get('report');
      setDiaryEmotion(() => data.data.emotion);
      setdiaryTime(() => data.data.time);
      setTags(() => data.data.userTag);
      setAllTags(() => data.data.allTag);
      setChallenge(() => data.data.challenge);
    } catch (err) {
      snackBar('error', '에러가 발생하였습니다. ');
    }
  };

  if (tags.length === 0) {
    return (
      <Background>
        <ClassicSpinner size={100} color="pink" />
      </Background>
    );
  }

  let DiaryText = `
   행복 감정 일기 작성은 ${diaryEmotion.happy}개, 
   슬픈 감정 일기 작성은 ${diaryEmotion.sad}개, 
   화난 감정 일기 작성은 ${diaryEmotion.angry}개로 
   6월 한달동안 작성해 주신 일기에서 
   가장 많이 나타난 감정은 행복입니다.
  `;

  let TimeText = `
  이번 달에는 총 ${
    diaryTime.morning + diaryTime.dawn + diaryTime.night + diaryTime.afternoon
  }개의 일기 중
  ${diaryTime.morning}개를 아침에, ${diaryTime.afternoon}개를 점심에
  ${diaryTime.night}개를 저녁에, ${diaryTime.dawn}개를 새벽에
  작성하셨네요, 훌륭합니다!
  `;

  let ChallengeText = challenge.challenge.map((it, index) => {
    let name = it;
    let state = challenge.completed[index]
      ? '완료하였습니다.'
      : '진행 중 입니다.';
    return (
      <p>
        🎯 {name}를 {state}
      </p>
    );
  });

  let month = today.format('MM').replace(/(^0+)/, '');
  return (
    <>
      <Nav />
      <style.BackGroundContainer>
        <style.MainContainers>
          <style.RTitleWrap>
            <style.ReportTitle>🏁 2022년 {month}월 리포트 🏁</style.ReportTitle>
          </style.RTitleWrap>
          <style.DescTitle>
            이번 달에는 어떤 감정을 많이 느꼈을까요?
          </style.DescTitle>
          <style.ReportContainer>
            <EmotionGraph data={diaryEmotion} />
            <style.RDiaryText>{DiaryText}</style.RDiaryText>
          </style.ReportContainer>
          <style.DescTitle>
            이번 달에 내가 가장 많이 쓴 태그는 무엇일까요?
          </style.DescTitle>
          <style.ReportContainer>
            <TagRanking data={tags} />
          </style.ReportContainer>
          <style.DescTitle>
            이번 달은 어느 시간대에 일기를 작성했을까요?
          </style.DescTitle>
          <style.ReportContainer>
            <TimeGraph data={diaryTime} />
            <style.RDiaryText>{TimeText}</style.RDiaryText>
          </style.ReportContainer>
          <style.DescTitle>
            이번 달에 전체 사용자가 가장 많이 쓴 태그는 무엇일까요?
          </style.DescTitle>
          <style.ReportContainer>
            <TagRanking data={allTags} />
          </style.ReportContainer>
          <style.DescTitle>현재까지의 도전과제 진행상황입니다.</style.DescTitle>
          <style.ChallengeContainer>
            {challenge.challenge.length === 0 ? (
              <p>도전 / 완료한 챌린지가 없습니다. 🥲</p>
            ) : (
              <p>{ChallengeText}</p>
            )}
          </style.ChallengeContainer>
          <style.Quotation>당신의 내일을 응원합니다</style.Quotation>
          <style.Quotation>-밤하늘-</style.Quotation>
        </style.MainContainers>
      </style.BackGroundContainer>
    </>
  );
};
export default Report;
