import React from 'react';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import Nav from '../../components/nav/Nav';
import styled from 'styled-components';

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
  font-size: 40px;
  font-family: 'InfinitySans-RegularA1';
`;

const Tag = styled.span`
  font-size: 20px;
  font-family: 'EliceDigitalBaeum';
`;

const View = () => {
  const content =
    '✏️태그태그태그 \n안녕하세요\n일기작성\n**<span style="color: #a62cff">일기쓰기</span>**';

  return (
    <>
      <Nav />
      <ViewContainer>
        <TiteWrap>
          <Title>제목</Title>
        </TiteWrap>
        <TagWrap>
          <Tag>#태그</Tag>
        </TagWrap>
        <ContentWrapper>
          <Viewer initialValue={content || ''} />
        </ContentWrapper>
      </ViewContainer>
    </>
  );
};

export default View;
