import Modal from '../../components/modal/Modal';
import {
  EmotionCard,
  Title,
  DiaryDate,
  DateWrapper,
} from '../../styles/NoteStyle';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
