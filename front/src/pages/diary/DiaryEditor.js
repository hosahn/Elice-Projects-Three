import React, { useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import { titleState, tagState, writeState } from '../../atoms';
import Btn from '../../components/Btn';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import axios from 'axios';
import { Background } from '../../styles/ModalStyle';
import { ClassicSpinner } from 'react-spinners-kit';
import DiaryModal from './DiaryModal';
import * as Api from '../../api';

const DiaryEditor = () => {
  const editorRef = useRef();
  const title = useRecoilValue(titleState);
  const tag = useRecoilValue(tagState);
  const setWrite = useSetRecoilState(writeState);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageList, setImageList] = useState([]);

  const uploadImage = async blob => {
    const name = blob.name;
    const imgName = name.replace(/(\s*)/g, '');
    const res = await Api.get(`upload/${imgName}`);

    setImageList(data => [res.data.imageUrl, ...data]);
    console.log(imageList);
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
    if (title.length > 0 && temp.length > 2) {
      await Api.post('diary', {
        tag,
        text: editorInstance.getMarkdown(),
        title,
        imageList,
      });
      setSubmit(prev => !prev);
      setLoading(prev => !prev);
      setWrite(true);
      setTimeout(() => setLoading(prev => !prev), 1500);
    } else {
      alert('일기 작성 문구 ~~~~~');
    }

    const diary = temp.replace(/\!\[inputImg]\(https:\/\/(.*?).[(png)|(jpeg)|(jpg)]\)/g, '');
    console.log(diary);

    await Api.postDiary({
      diary: diary,
    }).then(res => console.log(res));
  };

  return (
    <>
      <Editor
        initialValue={'✏️'}
        previewStyle='vertical'
        height='500px'
        initialEditType='wysiwyg'
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
            <ClassicSpinner size={100} color='pink' />
          </Background>
        ) : (
          <DiaryModal />
        ))}
    </>
  );
};

export default DiaryEditor;
