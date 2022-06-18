<<<<<<< HEAD
import React, { useState } from 'react';
import { TextInput } from '../../styles/CommonStyle';
import { useRecoilState } from 'recoil';
import { titleState } from '../../atoms';

const Title = () => {
  const [title, setTitle] = useRecoilState(titleState);

  return (
    <TextInput
      type="text"
      size={2}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="제목을 입력해주세요"
      value={title}
    />
=======
import React from 'react';
import { TextInput } from '../../styles/CommonStyle';
import { useRecoilState } from 'recoil';
import { titleState } from '../../atoms';
import { useState } from 'react';
import { WaringText } from '../../styles/DiaryStyle';

const Title = () => {
  const [title, setTitle] = useRecoilState(titleState);
  const [open, setOpen] = useState(false);

  const checkInputTitle = (event) => {
    if (event.target.value.length > 21) {
      setOpen(true);
    } else {
      setTitle(event.target.value);
      setOpen(false);
    }
  };

  return (
    <>
      <TextInput
        type="text"
        size={2}
        onChange={checkInputTitle}
        placeholder="제목을 입력해주세요"
        value={title}
      />
      {open && <WaringText>제목은 20자 제한이에요 ㅠ-ㅠ </WaringText>}
    </>
>>>>>>> origin/BE/test/HS
  );
};

export default Title;
