import React, { useEffect, useState, useRef } from 'react';
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
  const viewerRef = useRef();

  useEffect(() => {
    getDiary();
  }, []);

  useEffect(() => {
    viewerRef.current.getInstance().setMarkdown(diary.text);
  }, [diary]);

  useEffect(() => {}, [diary]);

  const getDiary = async () => {
    try {
      const res = await Api.get(`diary/${state}`);
      setDiary(res.data);
    } catch (err) {
      alert('일기 로딩에 실패...');
    }
  };

  const clickPdf = async (e) => {
    e.preventDefault();
    try {
      const res = await Api.getPdf(`pdf/${diary.id}`);
      const blob = new Blob([res.data]);
      const fileObjectUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = fileObjectUrl;
      link.style.display = 'none';
      link.download = 'asdf.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(fileObjectUrl);
    } catch (err) {
      alert('pdf 다운로드에 실패하였습니다. ');
    }
  };

  return (
    <>
      <Nav />
      <ViewContainer>
        <IconWrapper onClick={clickPdf}>
          <FontAwesomeIcon icon={faFilePdf} className="user" />
          pdf로 다운로드하기
        </IconWrapper>
        <TiteWrapper>
          <DiaryTitle>{diary.title}</DiaryTitle>
        </TiteWrapper>
        <TagWrapper>
          <DiaryTag>{diary.tag ? `#${diary.tag}` : ''}</DiaryTag>
        </TagWrapper>
        <ContentWrapper>
          <Viewer ref={viewerRef} />
        </ContentWrapper>
      </ViewContainer>
    </>
  );
};

export default View;
