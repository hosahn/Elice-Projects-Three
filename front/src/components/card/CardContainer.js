import { CardWrap } from '../../styles/CardStyle';

const CardContainer = (props) => {
  const { width, height, color } = props;
  return (
    <CardWrap width={width} height={height} color={color}>
      {props.children}
    </CardWrap>
  );
};

export default CardContainer;
