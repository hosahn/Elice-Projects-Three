import styled from 'styled-components';

export const TagBox = styled.div`
  display: flex;
  align-items: center;
  min-height: 3rem;
  width: 30rem;
  margin: 0.5rem;
  padding: 0 1rem;
  border: none;
  border-bottom: 2px solid #ccc;
  &:focus-within {
    border-color: ${({ theme }) => theme.color.mainPurple};
  }
`;

export const TagItem = styled.div`
  align-items: center;
  margin: 0.3rem;
  padding: 0.5rem;
  background-color: #f3f0ff;
  opacity: 0.7;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.mainPurple};
  font-size: 13px;
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
  min-width: 5rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
  &:focus::-webkit-input-placeholder {
    color: #748ffc;
  }
`;
