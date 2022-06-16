import styled from 'styled-components';

export const NavWrap = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: ${({ theme }) => theme.color.subPurple};
  button {
    border: none;
    margin-right: 30px;
    background-color: transparent;
    cursor: pointer;
    font-size: 15px;
  }
`;

export const Btn = styled.button`
  margin-right: 10px;
  color: white;
  font-weight: bold;
`;

export const UserBtn = styled.button`
  color: white;
`;

export const HighLight = styled.div`
  &:hover {
    background-image: linear-gradient(transparent 60%, #f8cd07 40%);
  }
`;
