import styled from "styled-components";
import ChallengeCard from "./ChallengeCard";
import { ChallengeContainer } from "../../styles/ChallengeStyle";

const ChallengeList = () => {
  return (
    <ChallengeContainer>
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
    </ChallengeContainer>
  );
};

export default ChallengeList;
