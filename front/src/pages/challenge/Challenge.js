import { useState } from 'react';
import { MainContainer } from '../../styles/CommonStyle';
import styled from 'styled-components';
import CardContainer from '../../components/card/CardContainer';

import Nav from '../../components/nav/Nav';

const CardsContainer = styled.div`
  width: 70rem;
  height: 400px;
  display: flex;
  margin-top: 50px;
  padding: 5px;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Challenge = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Nav />
      <div style={{ marginTop: '5rem' }}>
        <MainContainer>
          <TitleWrap>
            <div>챌린지</div>
            <button>챌린지 기록</button>
          </TitleWrap>
          <CardsContainer>
            <CardContainer
              width={35}
              height={15}
              color={'#f3f0ff'}
              shadow={'false'}
            >
              <image />
            </CardContainer>
          </CardsContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default Challenge;
