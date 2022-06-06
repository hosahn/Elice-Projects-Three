import styled from 'styled-components';

const BarWrap = styled.div`
  height: 20px;
  width: 80%;
  background-color: #eff0f2;
  border-radius: 50px;
  margin: 50px;
`;

const Filter = styled.div`
  height: 100%;
  width: ${(props) => (props.completed ? props.completed : 0)}%;
  background-color: #916bbf;
  border-radius: 50px;
  text-align: right;
`;

const Label = styled.div`
  padding: 5px;
  color: white;
  font-weight: bold;
`;

const ProgressBar = (props) => {
  const { completed } = props;
  return (
    <BarWrap>
      <Filter completed={completed}>
        <Label>{`${completed}%`}</Label>
      </Filter>
    </BarWrap>
  );
};

export default ProgressBar;
