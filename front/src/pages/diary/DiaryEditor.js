import React, { useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { titleState, tagState } from '../../atoms';
import Btn from '../../components/Btn';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { Background } from '../../styles/CommonStyle';
import { HeartSpinner } from 'react-spinners-kit';
import DiaryModal from './DiaryModal';

const DiaryEditor = () => {
  const editorRef = useRef();
  const title = useRecoilValue(titleState);
  const tag = useRecoilValue(tagState);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const image = [];

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
    image.push(res.data.imageUrl);
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
    setSubmit((prev) => !prev);
    setLoading((prev) => !prev);
    setTimeout(() => setLoading((prev) => !prev), 1500);
  };

  return (
    <>
      <Editor
        initialValue={'✏️'}
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
      <div style={{ float: 'right' }}>
        <Btn text={'저장하기'} type={'main'} onClick={handleClick} />
      </div>
      {submit &&
        (loading ? (
          <Background>
            <HeartSpinner size={100} color="pink" />
          </Background>
        ) : (
          <DiaryModal />
        ))}
    </>
  );
};

export default DiaryEditor;
