import React, { useRef, useEffect, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { textState } from '../../atoms';
import { useSetRecoilState } from 'recoil';
import * as Api from '../../api';
import axios from 'axios';

const DiaryEditor = () => {
  const editorRef = useRef();
  const setText = useSetRecoilState(textState);

  const blobToBinary = async (blob) => {
    const buffer = await blob.arrayBuffer();
    const view = new Int8Array(buffer);
    return [...view].map((n) => n.toString(2)).join('');
  };

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
    console.log(blobToBinary(blob));
    await axios(res.data.url, {
      method: 'PUT',
      body: blobToBinary(blob),
      headers: new Headers({
        'Content-Type': 'text/plain',
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    return res.data.imgUrl;
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
          addImageBlobHook: async (e, callback) => {
            const imgUrl = await uploadImage(e);
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
