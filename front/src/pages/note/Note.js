import { useEffect, useState } from 'react';
import Nav from '../../components/nav/Nav';
import EmotionList from './EmotionList';
import TagList from './TagList';
import {
  BoardContainer,
  EmotionBtn,
  TagBtn,
  BtnContainer,
} from '../../styles/NoteStyle';

const Note = () => {
  const [tagOpen, setTagOpen] = useState(false);

  const clickEmotion = () => {
    setTagOpen(false);
  };

  const clickTag = () => {
    setTagOpen(true);
  };

  return (
    <>
      <Nav />
      <BtnContainer>
        <EmotionBtn onClick={clickEmotion} state={tagOpen}>
          전체글
        </EmotionBtn>
        <TagBtn onClick={clickTag} state={tagOpen}>
          태그
        </TagBtn>
      </BtnContainer>
      <BoardContainer>{tagOpen ? <TagList /> : <EmotionList />}</BoardContainer>
    </>
  );
};

export default Note;
