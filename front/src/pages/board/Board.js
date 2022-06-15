import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/nav/Nav';

const BtnContainer = styled.div`
  margin: 100px;
  padding-bottom: 1px;
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

const Board = () => {
  const apple = 'dfskdfjls';
  return (
    <>
      <Nav />
      <BtnContainer>
        <SearchBtn>전체글</SearchBtn>
        <SearchBtn>태그</SearchBtn>
      </BtnContainer>
    </>
  );
};

export default Board;
