import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { tagState } from '../../atoms';
import { TagBox, TagItem, TagInput } from '../../styles/TagStyle';

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
            <span>{inputTag}</span>
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
