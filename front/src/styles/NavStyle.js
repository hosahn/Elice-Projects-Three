import styled from 'styled-components';

export const NavWrap = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: ${({ theme }) => theme.color.subPurple};
`;

export const Btn = styled.button`
  margin-right: 30px;
  font-size: 15px;
  margin-right: 20px;
  color: white;
  font-weight: bold;
`;

export const UserBtn = styled.button`
  margin-right: 30px;
  font-size: 25px;
  color: white;
`;

export const HighLight = styled.div`
  &:hover {
    background-image: linear-gradient(transparent 60%, #f8cd07 40%);
  }
`;
