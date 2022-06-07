import React, { useRef } from 'react';
import * as Api from '../../api';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { diaryItemState } from '../../atoms/DiaryAtom';
import { useSetRecoilState } from 'recoil';

const DiaryEditor = () => {
  const editorRef = useRef();

  const uploadImage = async (blob) => {
    console.log('이미지');
    const formData = new FormData();
    formData.append('image', blob);
    const url = await Api.postImg('/img', formData);
    return url;
  };

  const handleClick = () => {
    const editorInstance = editorRef.current.getInstance();
    const temp = editorInstance.getMarkdown();
  };

  return (
    <>
      <Editor
        initialValue="오늘 하루의 감정을 글로~~~."
        previewStyle="vertical"
        height="500px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        ref={editorRef}
        hooks={{
          addImageBlobHook: (blob, callback) => {
            const img_url = uploadImage(blob);
            callback(img_url, 'alt_text');
          },
        }}
      />
    </>
  );
};

export default DiaryEditor;
