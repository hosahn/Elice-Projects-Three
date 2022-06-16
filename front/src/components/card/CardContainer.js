import { CardWrap } from '../../styles/CardStyle';

const CardContainer = (props) => {
  const { width, height, color, shadow } = props;
  return (
    <CardWrap width={width} height={height} color={color} shadow={shadow}>
      {props.children}
    </CardWrap>
  );
};

export default CardContainer;
