import Modal from '../../components/modal/Modal';
import { Title, DiaryDate, DateWrapper } from '../../styles/NoteStyle';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import snackBar from '../../components/snackBar';

const TagDiaryList = (props) => {
  const navigate = useNavigate();
  const { setOpenTagList, tagList } = props;

  const openCard = (e) => {
    const diaryId = e.currentTarget.value;
    navigate(`/diary/${diaryId}`, { state: diaryId });
  };

  return (
    <Modal setOpen={setOpenTagList}>
      <EmotionContainer>
        {tagList.map((it) => (
          <EmotionCard
            onClick={openCard}
            key={it.id}
            emotion={it.emotion}
            value={it.id}
          >
            <Title>{it.title}</Title>
            <DateWrapper>
              <DiaryDate>{it.date.slice(0, 10)}</DiaryDate>
            </DateWrapper>
          </EmotionCard>
        ))}
      </EmotionContainer>
    </Modal>
  );
};

export default TagDiaryList;

const EmotionContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  place-items: center;
  overflow-x: auto;
  overflow-y: scroll;
  height: 500px;
  width: 100%;
`;

const EmotionCard = styled.div`
  background-color: ${({ theme }) => theme.color.lightGrayBg};
  height: 70px;
  width: 480px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px 20px;
  margin-bottom: 20px;
  span {
    font-family: 'InfinitySans-RegularA1';
  }
  border: 7px solid;
  background-color: white;
  border-color: ${(props) => {
    switch (props.emotion) {
      case '행복':
        return '#FFEC99';
      case '슬픔':
        return '#A5D8FF';
      case '불안':
        return '#FFD6A5';
      case '혐오':
        return '#FFD6A5';
      case '분노':
        return '#FFADAD';
      case '놀람':
        return '#BDB2FF';
      case '평범':
        return '#D8F5A2';
      default:
        return 'white';
    }
  }};
`;
