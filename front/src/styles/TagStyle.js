import styled from 'styled-components';

export const TagBox = styled.div`
  display: flex;
  align-items: center;
<<<<<<< HEAD
  min-height: 3rem;
  width: 30rem;
  margin: 0.5rem;
  padding: 0 1rem;
  border: none;
  border-bottom: 2px solid #ccc;
=======
  min-height: 20pxs;
  width: 700px;
  padding: 0 10px;
  margin: 13px 10px;
  border: none;
  border-radius: 10px;
>>>>>>> origin/BE/test/HS
  &:focus-within {
    border-color: ${({ theme }) => theme.color.mainPurple};
  }
`;

export const TagItem = styled.div`
  align-items: center;
<<<<<<< HEAD
  margin: 0.3rem;
  padding: 0.5rem;
=======
  margin: 2px;
  padding: 9px;
>>>>>>> origin/BE/test/HS
  background-color: #f3f0ff;
  opacity: 0.7;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.mainPurple};
<<<<<<< HEAD
  font-size: 13px;
=======
  font-size: 15px;
>>>>>>> origin/BE/test/HS
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: #ffffff;
  }
  span {
    font-size: 1rem;
  }
`;

export const TagInput = styled.input`
<<<<<<< HEAD
  min-width: 5rem;
=======
  min-width: 300px;
  font-size: 17px;
>>>>>>> origin/BE/test/HS
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
  &:focus::-webkit-input-placeholder {
    color: #748ffc;
  }
`;
