import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useEdit from '../../hooks/useEdit';
import * as Api from '../../api';
import TagBook from './TagBook';

const TagList = () => {
  const [tagList, setTagList] = useState([]);
  const { openSubmit, openEditBtn, cancleBtn, checkType } = useEdit();

  useEffect(() => {
    getTagList();
  }, []);

  const getTagList = async () => {
    try {
      const res = await Api.get('book/list');
      setTagList(res.data);
    } catch (err) {}
  };

  const clickEdit = () => {
    checkType('open');
  };

  const clickCancelEdit = () => {
    checkType('cancle');
  };

  const clickSubmit = () => {
    checkType('submit');
  };

  return (
    <>
      <BtnContainer>
        <EditBtn onClick={openEditBtn ? clickSubmit : clickEdit}>
          {openEditBtn ? '수정 완료' : ' 수정하기'}
        </EditBtn>
        {openEditBtn && <EditBtn onClick={clickCancelEdit}>취소</EditBtn>}
      </BtnContainer>
      <TagListContainer>
        {tagList.map((it) => (
          <TagBook
            it={it}
            key={it.id}
            openEditBtn={openEditBtn}
            cancleBtn={cancleBtn}
            clickSubmit={clickSubmit}
            openSubmit={openSubmit}
          />
        ))}
      </TagListContainer>
    </>
  );
};

const TagListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  cursor: pointer;
`;

const EditBtn = styled.button`
  font-family: 'EliceDigitalBaeum';
  font-size: 15px;
  width: 100px;
  height: 40px;
  background-color: transparent;
  border-radius: 10px;
  margin-left: 5px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
`;

export default TagList;
