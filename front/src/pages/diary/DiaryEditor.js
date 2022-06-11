import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { titleState, tagState } from '../../atoms';
import Btn from '../../components/Btn';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

const DiaryEditor = () => {
  const editorRef = useRef();
  const title = useRecoilValue(titleState);
  const tag = useRecoilValue(tagState);

  const uploadImage = async (blob) => {
    const name = blob.name;

    const res = await axios({
      method: 'get',
      url: `http://localhost:5001/upload/${name}`,
    });

    await axios({
      method: 'put',
      url: res.data.url,
      data: blob,
    });

    return res.data.imageUrl;
  };

  const handleClick = () => {
    const editorInstance = editorRef.current.getInstance();
    const text = editorInstance.getMarkdown();
    const url = 'https://12team.com/userDiary/img';
    axios.post(url, {
      title,
      tag,
      text,
    });
  };

  return (
    <>
      <Editor
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
      <div style={{ float: 'right', margin: '1rem' }}>
        <Btn text={'저장하기'} type={'main'} onClick={handleClick} />
      </div>
    </>
  );
};

export default DiaryEditor;
