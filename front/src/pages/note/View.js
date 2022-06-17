import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Nav from '../../components/nav/Nav';
import * as Api from '../../api';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import {
  ViewContainer,
  TiteWrapper,
  TagWrapper,
  ContentWrapper,
  DiaryTag,
  DiaryTitle,
  IconWrapper,
} from '../../styles/NoteStyle';

const View = () => {
  const { state } = useLocation();
  const [diary, setDiary] = useState({});

  useEffect(() => {
    getDiary();
  }, []);

  useEffect(() => {
    console.log(diary);
  }, [diary]);

  const getDiary = async () => {
    const res = await Api.get(`diary/${state}`);
    setDiary(res.data);
  };

  const text =
    '✏️![text](https://ai-project-last.s3.ap-northeast-2.amazonaws.com/diary/16554467683011655192700876강아지.jpeg) \n마크다운으로\n사진을 전송.\n';

  return (
    <>
      <Nav />
      <ViewContainer>
        <IconWrapper onClick={() => console.log('실수')}>
          <FontAwesomeIcon icon={faFilePdf} className="user" />
          pdf로 다운로드하기
        </IconWrapper>
        <TiteWrapper>
          <DiaryTitle>{diary.title}</DiaryTitle>
        </TiteWrapper>
        <TagWrapper>
          <DiaryTag>#{diary.tag}</DiaryTag>
        </TagWrapper>
        <ContentWrapper>
          <Viewer initialValue={diary.text} />
        </ContentWrapper>
      </ViewContainer>
    </>
  );
};

export default View;
