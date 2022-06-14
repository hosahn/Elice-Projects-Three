import { CardWrap } from '../../styles/CardStyle';

const CardContainer = (props) => {
  const { width, height } = props;
  return (
    <CardWrap width={width} height={height}>
      {props.children}
    </CardWrap>
  );
};

export default CardContainer;
