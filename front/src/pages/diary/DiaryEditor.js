<<<<<<< HEAD
import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { titleState, tagState } from '../../atoms';
import Btn from '../../components/Btn';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
=======
import React, { useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import { titleState, tagState } from "../../atoms";
import Btn from "../../components/Btn";
import { useRecoilValue } from "recoil";
import axios from "axios";
import { Background } from "../../styles/ModalStyle";
import { HeartSpinner } from "react-spinners-kit";
import DiaryModal from "./DiaryModal";
import * as Api from "../../api";
>>>>>>> origin/BE/test/HS

const DiaryEditor = () => {
  const editorRef = useRef();
  const title = useRecoilValue(titleState);
  const tag = useRecoilValue(tagState);
<<<<<<< HEAD
  const Name = '나연';

  const uploadImage = async (blob) => {
    const name = blob.name;

    const res = await axios({
      method: 'get',
      url: `http://localhost:5001/upload/${name}`,
    });

    await axios({
      method: 'put',
=======
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageList, setImageList] = useState([]);

  const uploadImage = async (blob) => {
    const name = blob.name;
    const res = await axios({
      method: "get",
      url: `http://localhost:5001/upload/${name}`,
    });

    setImageList((data) => [res.data.imageUrl, ...data]);
    console.log(imageList);

    await axios({
      method: "put",
>>>>>>> origin/BE/test/HS
      url: res.data.url,
      data: blob,
    });

    return res.data.imageUrl;
  };
<<<<<<< HEAD

  const handleClick = () => {
    const editorInstance = editorRef.current.getInstance();
    const text = editorInstance.getMarkdown();
    const url = 'https://12team.com/userDiary/img';
    axios.post(url, {
      title,
      tag,
      text,
    });
=======
  const handleClick = async () => {
    const editorInstance = editorRef.current.getInstance();
    const text = editorInstance.getMarkdown();
    if (title.length > 0 && text.length > 2) {
      await axios.post(
        "http://localhost:5001/diary",
        {
          tag,
          text,
          title,
          imageList,
        },
        { withCredentials: true }
      );
      setSubmit((prev) => !prev);
      setLoading((prev) => !prev);
      setTimeout(() => setLoading((prev) => !prev), 1500);
    } else {
      alert("일기 작성 문구 ~~~~~");
    }
>>>>>>> origin/BE/test/HS
  };

  return (
    <>
      <Editor
<<<<<<< HEAD
        initialValue={'✏️'}
        previewStyle="vertical"
        height="500px"
        initialEditType="wysiwyg"
        toolbarItems={[['bold', 'italic', 'strike'], ['image']]}
=======
        initialValue={"✏️"}
        previewStyle="vertical"
        height="500px"
        initialEditType="wysiwyg"
        plugins={[colorSyntax]}
>>>>>>> origin/BE/test/HS
        useCommandShortcut={true}
        ref={editorRef}
        hooks={{
          addImageBlobHook: async (e, callback) => {
            const imgUrl = await uploadImage(e);
<<<<<<< HEAD
            callback(imgUrl, 'text');
=======
            callback(imgUrl, "text");
>>>>>>> origin/BE/test/HS
            return false;
          },
        }}
      />
<<<<<<< HEAD
      <div style={{ float: 'right', margin: '1rem' }}>
        <Btn text={'저장하기'} type={'main'} onClick={handleClick} />
      </div>
=======
      <div style={{ float: "right" }}>
        <Btn text={"저장하기"} type={"main"} onClick={handleClick} />
      </div>
      {submit &&
        (loading ? (
          <Background>
            <HeartSpinner size={100} color="pink" />
          </Background>
        ) : (
          <DiaryModal />
        ))}
>>>>>>> origin/BE/test/HS
    </>
  );
};

export default DiaryEditor;
