import REPORT from '../../dummy/REPORT';
import { ReportContainer } from '../../styles/ReportStyle';
import { CardsContainer, CardTitle, CardWrapper, ExplainContext, TargetImg, StartBtn } from '../../styles/ChallengeStyle';

const ReportCard = () => {
  // = ({ props }) => {
  // const { name, month, number, e1, n1, e2, n2, n3, e3, mostT, time, yy, mm, dd, t1, t2, t3, a1, a2, a3, keep, finish, state } = props;
  return (
    <>
      <ReportContainer>
        <h1>
          {REPORT.name}님은 한 달 동안 총 {REPORT.number}개의 일기를 작성하셨습니다.
        </h1>
        <h2 style={{ display: 'inline' }}>원형그래프</h2>
        <h2>
          {REPORT.e1} 감정 일기 작성은 {REPORT.n1}개, {REPORT.e2} 감정 일기 작성은 {REPORT.n2}개, {REPORT.e3} 감정 일기 작성은 {REPORT.n3}개로
          {REPORT.month}월 한 달 동안 작성해주신 일기에서 가장 많이 나타난 감정은 '{REPORT.e1}'입니다.
        </h2>
      </ReportContainer>

      <ReportContainer>
        <h1>{REPORT.name}님께서 한 달 동안 작성한 태그 작성순 입니다.</h1>
        <h2>
          {REPORT.t1} {REPORT.t2} {REPORT.t3}
        </h2>
      </ReportContainer>

      <ReportContainer>
        <h1>전체 사용자의 {REPORT.month} 태그 TOP3 입니다.</h1> \
        <h2>
          {REPORT.a1} {REPORT.a2} {REPORT.a3}
        </h2>
      </ReportContainer>

      <ReportContainer>
        <h1>
          {REPORT.name}님은 {REPORT.time}에 일기를 가장 많이 작성하셨네요.
        </h1>
        <h2>시간 별 막대그래프</h2>
      </ReportContainer>

      <ReportContainer>
        <h1>
          {REPORT.month}에 가장 많이 다시 읽은 일기는 {REPORT.yy}년 {REPORT.mm}월 {REPORT.dd}일에 작성한 {REPORT.mostT} 입니다.
        </h1>{' '}
      </ReportContainer>

      <ReportContainer>
        <h1>
          {REPORT.month}월 한 달 동안 {REPORT.name}님께서 진행 중 or 완료한 챌린지 입니다.
        </h1>
        <h2>진행 중:{REPORT.keep}</h2>
        <h2>
          완료: {REPORT.finish} {REPORT.state}
        </h2>
      </ReportContainer>
    </>
  );
};

export default ReportCard;
