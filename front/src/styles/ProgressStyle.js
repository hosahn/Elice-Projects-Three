import styled from 'styled-components';

export const BarWrap = styled.div`
  height: 20px;
  width: 80%;
  background-color: #eff0f2;
  border-radius: 50px;
  margin: 50px;
`;

export const Filter = styled.div`
  height: 100%;
  width: ${(props) => (props.completed ? props.completed * 10 : 0)}%;
  background-color: ${({ theme }) => theme.color.purple};
  border-radius: 50px;
  text-align: right;
`;

export const Label = styled.div`
  padding: 5px;
  color: white;
  font-weight: bold;
`;
