import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { tagState } from '../../atoms';

const TagBox = styled.div`
  display: flex;
  align-items: center;
  min-height: 3rem;
  width: 30rem;
  margin: 0.5rem;
  padding: 0 1rem;
  border: none;
  border-bottom: 1px solid #ccc;
  &:focus-within {
    border-color: #3d2c8d;
  }
`;

const TagItem = styled.div`
  align-items: center;
  margin: 0.3rem;
  padding: 0.5rem;
  background-color: #f3f0ff;
  opacity: 0.7;
  border-radius: 5px;
  color: #3d2c8d;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: #ffffff;
  }
`;

const Text = styled.span`
  font-size: 1rem;
`;

const TagInput = styled.input`
  display: inline-flex;
  min-width: 20rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
  &:focus::-webkit-input-placeholder {
    color: #748ffc;
  }
`;

const Tag = () => {
  const [tagItem, setTagItem] = useState('');
  const [inputTag, setInputTag] = useRecoilState(tagState);

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      addTagItem();
    }
  };

  const addTagItem = (e) => {
    setInputTag(tagItem);
    setTagItem('');
  };

  const deleteTagItem = (e) => {
    setInputTag('');
  };

  return (
    <>
      <TagBox>
        {inputTag && (
          <TagItem onClick={deleteTagItem}>
            <Text>{inputTag}</Text>
          </TagItem>
        )}
        <TagInput
          type="text"
          placeholder={
            inputTag
              ? '태그는 한개만 작성 가능합니다. ㅠㅡㅠ'
              : '태그를 작성해주세요😊'
          }
          tabIndex={2}
          onChange={(e) => setTagItem(e.target.value)}
          value={tagItem}
          onKeyPress={onKeyPress}
        />
      </TagBox>
    </>
  );
};

export default Tag;
