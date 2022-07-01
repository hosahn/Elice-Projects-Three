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
import * as Api from '../../api';
import snackBar from '../../components/snackBar';
import { useNavigate } from 'react-router-dom';

const Note = () => {
  const navigate = useNavigate();
  const [tagOpen, setTagOpen] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      await Api.get('user/info');
    } catch (err) {
      snackBar('error', '로그인 후 서비스 이용 가능합니다.');
      navigate('/login');
    }
  };

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
