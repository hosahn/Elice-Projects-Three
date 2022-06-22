import DATALIST from '../../dummy/DATALIST';
import { ReportContainer, DescTitle } from '../../styles/ReportStyle';
import { CardsContainer, CardTitle, CardWrapper, ExplainContext, TargetImg, StartBtn } from '../../styles/ChallengeStyle';
import EmotionChart from '../../charts/EmotionChart';
import Example from '../../charts/TimeChart';
const ReportCard = () => {
  // = ({ props }) => {
  // const { name, month, number, e1, n1, e2, n2, n3, e3, mostT, time, yy, mm, dd, t1, t2, t3, a1, a2, a3, keep, finish, state } = props;
  return (
    <>
      <ReportContainer>
        <DescTitle>
          {DATALIST[0].name}님은 한 달 동안 총 {DATALIST[0].number}개의 일기를 작성하셨습니다.
        </DescTitle>
        <h2 style={{ display: 'inline' }}>원형그래프</h2>
        <div style={{ marginTop: '0px' }}>
          <EmotionChart></EmotionChart>
        </div>
        <h2>
          {DATALIST[0].e1} 감정 일기 작성은 {DATALIST[0].n1}개, {DATALIST[0].e2} 감정 일기 작성은 {DATALIST[0].n2}개, {DATALIST[0].e3} 감정 일기 작성은 {DATALIST[0].n3}개로
          {DATALIST[0].month}월 한 달 동안 작성해주신 일기에서 가장 많이 나타난 감정은 '{DATALIST[0].e1}'입니다.
        </h2>
      </ReportContainer>

      <ReportContainer>
        <DescTitle>{DATALIST[0].name}님께서 한 달 동안 작성한 태그 작성순 입니다.</DescTitle>
        <h2>
          {DATALIST[0].t1} {DATALIST[0].t2} {DATALIST[0].t3}
        </h2>
      </ReportContainer>

      <ReportContainer>
        <DescTitle>전체 사용자의 {DATALIST[0].month}월 태그 TOP3 입니다.</DescTitle>
        <h2>
          {DATALIST[0].a1} {DATALIST[0].a2} {DATALIST[0].a3}
        </h2>
      </ReportContainer>

      <ReportContainer>
        <DescTitle>
          {DATALIST[0].name}님은 {DATALIST[0].time}에 일기를 가장 많이 작성하셨네요.
        </DescTitle>
        <h2>시간 별 막대그래프</h2>
        <Example></Example>
      </ReportContainer>

      <ReportContainer>
        <DescTitle>
          {DATALIST[0].month}월에 가장 많이 다시 읽은 일기는 {DATALIST[0].yy}년 {DATALIST[0].mm}월 {DATALIST[0].dd}일에 작성한 '{DATALIST[0].mostT}' 입니다.
        </DescTitle>{' '}
      </ReportContainer>

      <ReportContainer>
        <DescTitle>
          {DATALIST[0].month}월 한 달 동안 {DATALIST[0].name}님께서 진행 중 or 완료한 챌린지 입니다.
        </DescTitle>
        <h2>진행 중:{DATALIST[0].keep}</h2>
        <h2>
          완료: {DATALIST[0].finish} {DATALIST[0].state}
        </h2>
      </ReportContainer>
    </>
  );
};

export default ReportCard;
