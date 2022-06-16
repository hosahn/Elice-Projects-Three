import React from 'react';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

const ContentsViewer = ({ contents }) => {
  return <Viewer initialValue={contents} />;
};

export default ContentsViewer;
