import { useRef, useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Nav from '../../components/nav/Nav';
import EmotionList from './EmotionList';
import TagList from './TagList';

const BtnContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  margin-right: 200px;
  margin-left: 200px;
  padding-bottom: 1px;
  weight: 800px;
  border-bottom: solid 1px #ced4da;
`;

const NoteBtn = styled.button`
  font-family: 'InfinitySans-RegularA1';
  font-size: 20px;
  color: #868e96;
  margin-right: 50px;
  padding-bottom: 10px;
  &:focus {
    color: #862e9c;
    border-bottom: solid 3px #862e9c;
    outline: 0;
  }
`;

const BoardContainer = styled.div`
  margin-right: 200px;
  margin-left: 200px;
`;

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
