import Cards from '../../components/card/Cards';
import ChallengeList from './ChallengeList';
import { MainContainer } from '../../styles/CommonStyle';

const Challenge = () => {
  return (
    <div style={{ marginTop: '5rem' }}>
      <MainContainer>
        <ChallengeList />
        <div style={{ marginTop: '3rem' }}>
          <Cards
            width={15}
            height={16}
            containerWdith={70}
            challenge={'ture'}
          />
        </div>
      </MainContainer>
    </div>
  );
};

export default Challenge;
