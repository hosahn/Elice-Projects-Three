import { CardContainer } from '../../styles/CardStyle';

const Container = (props) => {
  const { width, height } = props;
  return (
    <CardContainer width={width} height={height}>
      {props.children}
    </CardContainer>
  );
};

export default Container;
