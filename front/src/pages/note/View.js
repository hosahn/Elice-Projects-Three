import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Nav from '../../components/nav/Nav';
import styled from 'styled-components';
import * as Api from '../../api';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

const ViewContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;
  margin-right: 200px;
  margin-left: 200px;
`;

const TiteWrap = styled.div`
  margin-bottom: 30px;
  margin-left: 10px;
  border-bottom: solid 2px #ced4da;
  display: flex;
  flex-direction: rows;
  width: 100%;
`;

const TagWrap = styled.div`
  margin-bottom: 30px;
  margin-left: 10px;
`;

const ContentWrapper = styled.div`
  min-height: 500px;
  background-color: #f8f9fa;
  margin-bottom: 20px;
  padding: 20px 30px;
  border-radius: 20px;
`;

const Title = styled.span`
  font-size: 35px;
  font-family: 'InfinitySans-RegularA1';
`;

const Tag = styled.span`
  font-size: 20px;
  font-family: 'EliceDigitalBaeum';
`;

const IconWrapper = styled.div`
  font-size: 15px;
  color: #495057;
  cursor: pointer;
  float: right;
`;

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
        <TiteWrap>
          <Title>{diary.title}</Title>
        </TiteWrap>
        <TagWrap>
          <Tag>#{diary.tag}</Tag>
        </TagWrap>
        <ContentWrapper>
          <Viewer initialValue={diary.text} />
        </ContentWrapper>
      </ViewContainer>
    </>
  );
};

export default View;
