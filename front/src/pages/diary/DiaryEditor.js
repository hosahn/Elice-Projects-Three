import React, { useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import Btn from '../../components/Btn';
import axios from 'axios';
import { Background } from '../../styles/ModalStyle';
import { ClassicSpinner } from 'react-spinners-kit';
import DiaryModal from './DiaryModal';
import * as Api from '../../api';

const DiaryEditor = (props) => {
  const editorRef = useRef();
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const { title, tag } = props;

  const uploadImage = async (blob) => {
    const name = blob.name;
    const imgName = name.replace(/(\s*)/g, '');
    const res = await Api.get(`upload/${imgName}`);

    await axios({
      method: 'put',
      url: res.data.url,
      data: blob,
    });

    return res.data.imageUrl;
  };

  const handleClick = async () => {
    const editorInstance = editorRef.current.getInstance();
    const temp = editorInstance.getMarkdown();
    const deleteImg = temp.replace(
      /\!\[inputImg]\(https:\/\/(.*?).[(png)|(jpeg)|(jpg)]\)/g,
      ''
    );
    const diary = deleteImg.replace(/<([^>]+)>/g, '');
    await Api.post('diary', {
      tag,
      text: temp,
      title,
      emotion: '불안',
    });
    // if (title.length > 0 && temp.length > 2) {
    //   try {
    //     const res = await Api.postDiary({
    //       diary: diary,
    //     });
    //     if (res.data.length !== 0) {
    //       console.log(typeof res.data);
    //       await Api.post('diary', {
    //         tag,
    //         text: temp,
    //         title,
    //         emotion: res.data,
    //       });
    //       setSubmit((prev) => !prev);
    //       setLoading((prev) => !prev);
    //       setTimeout(() => setLoading((prev) => !prev), 1500);
    //     } else {
    //       alert('일기 작성 문구 ~~~~~');
    //     }
    //   } catch (err) {
    //     alert('일기 저장에 실패');
    //   }
    // }
  };

  return (
    <>
      <Editor
        initialValue={'✏️'}
        previewStyle="vertical"
        height="500px"
        initialEditType="wysiwyg"
        plugins={[colorSyntax]}
        useCommandShortcut={true}
        ref={editorRef}
        hooks={{
          addImageBlobHook: async (e, callback) => {
            const imgUrl = await uploadImage(e);
            callback(imgUrl, 'inputImg');
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
            <ClassicSpinner size={100} color="pink" />
          </Background>
        ) : (
          <DiaryModal />
        ))}
    </>
  );
};

export default DiaryEditor;
