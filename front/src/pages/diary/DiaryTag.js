import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { tagState } from '../../atoms';
import { TagBox, TagItem, TagInput } from '../../styles/TagStyle';
import { WaringText } from '../../styles/DiaryStyle';

const Tag = () => {
  const [tagItem, setTagItem] = useState('');
  const [inputTag, setInputTag] = useRecoilState(tagState);
  const [open, setOpen] = useState(false);

  const checkTagLength = (event) => {
    if (event.target.value.length > 21) {
      setOpen(true);
    } else {
      setOpen(false);
      setTagItem(event.target.value);
    }
  };

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
          onChange={checkTagLength}
          value={tagItem}
          onKeyPress={onKeyPress}
        />
      </TagBox>
      {open && <WaringText>태그는 20자 제한이에요 ㅠ-ㅠ </WaringText>}
    </>
  );
};

export default Tag;