import { CardsContainer } from '../../styles/CardStyle';

const Container = (props) => {
  const { width, height } = props;
  return (
    <CardsContainer width={width} height={height}>
      {props.children}
    </CardsContainer>
  );
};

export default Container;
