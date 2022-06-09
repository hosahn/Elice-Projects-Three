import React, { useRef, useEffect, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { textState } from '../../atoms';
import { useSetRecoilState } from 'recoil';
import * as Api from '../../api';
import axios from 'axios';
import { response } from 'msw';

const DiaryEditor = () => {
  const editorRef = useRef();
  const setText = useSetRecoilState(textState);

  const uploadImage = async (blob) => {
    console.log(blob);
    const formData = new FormData();
    formData.append('imgFile', blob);
    formData.append('img', blob.name);
    const name = formData.get('img');
    console.log('fileName', name);
    const file = formData.get('imgFile');
    console.log('file', file);

    const res = await Api.putImg(`upload/${name}`);
    console.log(res.data);
    const result = await fetch(res.data.url, {
      method: 'PUT',
      body: blob,
    });

    console.log(result);
  };

  const handleClick = () => {
    const editorInstance = editorRef.current.getInstance();
    const temp = editorInstance.getMarkdown();
    setText(temp);
  };

  return (
    <>
      <Editor
        initialValue="오늘 하루의 감정을 글로~~~."
        previewStyle="vertical"
        height="500px"
        initialEditType="wysiwyg"
        toolbarItems={[['bold', 'italic', 'strike'], ['image']]}
        useCommandShortcut={true}
        ref={editorRef}
        hooks={{
          addImageBlobHook: async (blob, callback) => {
            const imgUrl = await uploadImage(blob);
            callback(imgUrl, 'text');
            return false;
          },
        }}
      />
      <button onClick={handleClick}>btn</button>
    </>
  );
};

export default DiaryEditor;
