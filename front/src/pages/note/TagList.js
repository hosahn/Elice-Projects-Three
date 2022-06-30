import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useEdit from '../../hooks/useEdit';
import * as Api from '../../api';
import TagBook from './TagBook';
import snackBar from '../../components/snackBar';

const TagList = () => {
  const [tagList, setTagList] = useState([]);
  const { openSubmit, openEditBtn, cancleBtn } = useEdit();

  useEffect(() => {
    getTagList();
    snackBar(
      'info',
      '태그에 해당하는 일기를 보기 위해서는 제목을 클릭해주세요.'
    );
  }, []);

  const getTagList = async () => {
    try {
      const res = await Api.get('book/list');
      setTagList(res.data);
    } catch (err) {}
  };

  return (
    <>
      <TagListContainer>
        {tagList.map((it) => {
          if (it.name.length !== 0) {
            return (
              <TagBook
                it={it}
                key={it.id}
                openEditBtn={openEditBtn}
                cancleBtn={cancleBtn}
                openSubmit={openSubmit}
              />
            );
          }
        })}
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

export default TagList;
