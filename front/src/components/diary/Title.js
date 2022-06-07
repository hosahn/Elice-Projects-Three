import React, { useState } from 'react';
import styled from 'styled-components';

const TitleInput = styled.input`
  min-height: 3rem;
  width: 30rem;
  margin: 0.5rem;
  padding: 0 1rem;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 2rem;
  &:focus {
    outline: none;
    border-color: #3d2c8d;
  }
  &:focus::-webkit-input-placeholder {
    color: #748ffc;
  }
`;

const Title = () => {
  const [title, setTitle] = useState('');

  return (
    <TitleInput
      type="text"
      onChange={(e) => setTitle(e.target.value)}
      placeholder="제목을 입력해주세요"
      value={title}
    />
  );
};

export default Title;
