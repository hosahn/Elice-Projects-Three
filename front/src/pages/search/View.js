import React from 'react';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

const View = () => {
  const contents =
    '✏️태그태그태그 \n안녕하세요\n일기작성\n**<span style="color: #a62cff">일기쓰기</span>**';

  return <Viewer initialValue={contents || ''} />;
};

export default View;
