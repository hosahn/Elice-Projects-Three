import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import styled from 'styled-components';
import snackBar from '../../components/snackBar';

const View = () => {
  const navigate = useNavigate();
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
      snackBar('error', '일기 로딩을 실패하였습니다.');
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

  const clickDelete = async () => {
    try {
      await Api.delete(`diary/${diary.id}`);
      snackBar('sucess', '삭제 완료되었습니다. ');
      setTimeout(() => {
        navigate('/note');
      }, 500);
    } catch (err) {
      const { data } = err.response;
      snackBar('error', data);
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
        <RemoveBtn onClick={clickDelete}>해당 일기 삭제하기</RemoveBtn>
      </ViewContainer>
    </>
  );
};

export default View;

const RemoveBtn = styled.button`
  float: right;
  margin-bottom: 20px;
  font-weight: bold;
  color: #ff6b6b;
`;
