import React, { useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { textState } from '../../atoms';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';

const DiaryEditor = () => {
  const editorRef = useRef();
  const setText = useSetRecoilState(textState);
  const [url, setUrl] = useState('');

  const uploadImage = async (blob) => {
    const imageUrl = 'https://12team.com/userDiary/img';
    const formData = new FormData();
    formData.append('image', blob);
    const res = await axios.get(imageUrl);
    console.log(res.data.imageUrl);
    return res.data.imageUrl;
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
            const imgUrl = uploadImage(blob);
            callback('text', imgUrl);
            return false;
          },
        }}
      />
      <button onClick={handleClick}>btn</button>
    </>
  );
};

export default DiaryEditor;
