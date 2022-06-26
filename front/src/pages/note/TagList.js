import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import useEdit from '../../hooks/useEdit';
import axios from 'axios';
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

  const clickSubmit = async (color, image, id) => {
    checkType('submit');
    const res1 = await Api.post(`book/images/${id}`, {
      image,
    });
    const res2 = await Api.post(`book/colors/${id}`, {
      color,
    });

    console.log(res1);
    console.log(res2);
  };

  return (
    <>
      <div>
        <button onClick={openEditBtn ? clickSubmit : clickEdit}>
          {openEditBtn ? '편집완료' : '편집'}
        </button>
        <button onClick={clickCancelEdit}>{openEditBtn && '편집취소'}</button>
      </div>
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
`;

export default TagList;
