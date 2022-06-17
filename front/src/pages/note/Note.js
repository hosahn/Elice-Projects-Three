import { useRef, useEffect } from 'react';
import { useState } from 'react';
import Nav from '../../components/nav/Nav';
import EmotionList from './EmotionList';
import TagList from './TagList';
import { BoardContainer, NoteBtn, BtnContainer } from '../../styles/NoteStyle';

const Note = () => {
  const [open, setOpen] = useState(true);
  const emotionList = useRef();

  useEffect(() => {
    if (open === true) {
      emotionList.current.focus();
    }
  }, []);

  const clickEmotion = () => {
    setOpen(true);
  };

  const clickTag = () => {
    setOpen(false);
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
      <BoardContainer>{open ? <EmotionList /> : <TagList />}</BoardContainer>
    </>
  );
};

export default Note;
