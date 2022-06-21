import { useRef, useEffect } from 'react';
import { useState } from 'react';
import Nav from '../../components/nav/Nav';
import EmotionList from './EmotionList';
import TagList from './TagList';
import { BoardContainer, NoteBtn, BtnContainer } from '../../styles/NoteStyle';

const Note = () => {
  const [tagOpen, setTagOpen] = useState(false);
  const emotionList = useRef();

  useEffect(() => {
    if (tagOpen === false) {
      emotionList.current.focus();
    }
  }, []);

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
        <NoteBtn onClick={clickEmotion} ref={emotionList}>
          전체글
        </NoteBtn>
        <NoteBtn onClick={clickTag}>태그</NoteBtn>
      </BtnContainer>
      <BoardContainer>{tagOpen ? <TagList /> : <EmotionList />}</BoardContainer>
    </>
  );
};

export default Note;
