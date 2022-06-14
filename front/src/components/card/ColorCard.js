import styled from 'styled-components';

const Color = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50px;
  background-color: ${(props) => props.color};
`;

const ColorCard = (props) => {
  return <Color color={props}></Color>;
};

export default ColorCard;
