import React, { useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import { titleState, tagState } from '../../atoms';
import Btn from '../../components/Btn';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { Background } from '../../styles/ModalStyle';
import { HeartSpinner } from 'react-spinners-kit';
import DiaryModal from './DiaryModal';

const DiaryEditor = () => {
  const editorRef = useRef();
  const title = useRecoilValue(titleState);
  const tag = useRecoilValue(tagState);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageList, setImageList] = useState([]);

  const uploadImage = async (blob) => {
    const name = blob.name;
    const res = await axios({
      method: 'get',
      url: `http://localhost:5001/upload/${name}`,
    });

    setImageList((data) => [res.data.imageUrl, ...data]);
    console.log(imageList);

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
    if (title.length > 0 && text.length > 2) {
      const url = 'https://12team.com/userDiary/img';
      axios.post(url, {
        tag,
        text,
        title,
        imageList,
      });
      setSubmit((prev) => !prev);
      setLoading((prev) => !prev);
      setTimeout(() => setLoading((prev) => !prev), 1500);
    } else {
      alert('일기 작성 문구 ~~~~~');
    }
  };

  return (
    <>
      <Editor
        initialValue={'✏️'}
        previewStyle="vertical"
        height="500px"
        initialEditType="wysiwyg"
        plugins={[colorSyntax]}
        language="ko-KR"
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
