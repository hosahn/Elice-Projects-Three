import { ReportContainer } from '../../styles/ReportStyle';
import { CardsContainer, CardTitle, CardWrapper, ExplainContext, TargetImg, StartBtn } from '../../styles/ChallengeStyle';

const ReportCard = ({ props }) => {
  const { name, year, month, num, e1, e2, e3, mostE, time, yy, mm, dd, mostT } = props;
  return (
    <>
      <ReportContainer>
        <h1>일기개수</h1> {/* <h1>{name}님은 한 달 동안 총 {num}개의 일기를 작성하셨습니다.</h1> */}
        <h2>원형그래프 & 설명</h2>
      </ReportContainer>

      <ReportContainer>
        <h1>일기개수</h1> {/* <h1>{name}님은 한 달 동안 총 {num}개의 일기를 작성하셨습니다.</h1> */}
        <h2>원형그래프 & 설명</h2>
      </ReportContainer>

      <ReportContainer>
        <h1>일기개수</h1> {/* <h1>{name}님은 한 달 동안 총 {num}개의 일기를 작성하셨습니다.</h1> */}
        <h2>원형그래프 & 설명</h2>
      </ReportContainer>

      <ReportContainer>
        <h1>일기개수</h1> {/* <h1>{name}님은 한 달 동안 총 {num}개의 일기를 작성하셨습니다.</h1> */}
        <h2>원형그래프 & 설명</h2>
      </ReportContainer>

      <ReportContainer>
        <h1>일기개수</h1> {/* <h1>{name}님은 한 달 동안 총 {num}개의 일기를 작성하셨습니다.</h1> */}
        <h2>원형그래프 & 설명</h2>
      </ReportContainer>
    </>
  );
};

export default ReportCard;
