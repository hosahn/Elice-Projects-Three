import { useState } from 'react';
import styled from 'styled-components';
import Nav from '../../components/nav/Nav';
import SearchEmotionList from './SearchEmotionList';
import SearchTagList from './SearchTagList';

const BtnContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  margin-right: 200px;
  margin-left: 200px;
  padding-bottom: 1px;
  weight: 800px;
  border-bottom: solid 2px #ced4da;
`;

const SearchBtn = styled.button`
  font-family: 'InfinitySans-RegularA1';
  font-size: 20px;
  color: #868e96;
  margin-right: 50px;
  padding-bottom: 10px;
  &:focus {
    color: #862e9c;
  }
`;

const BoardContainer = styled.div`
  margin: 0px 200px;
  padding-bottom: 1px;
`;

const Search = () => {
  const [open, setOpen] = useState(true);

  const clickBtn = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Nav />
      <BtnContainer>
        <SearchBtn onClick={clickBtn}>전체글</SearchBtn>
        <SearchBtn onClick={clickBtn}>태그</SearchBtn>
      </BtnContainer>
      <BoardContainer>
        {open ? <SearchEmotionList /> : <SearchTagList />}
      </BoardContainer>
    </>
  );
};

export default Search;
