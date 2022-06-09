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
  );
};

export default Title;
