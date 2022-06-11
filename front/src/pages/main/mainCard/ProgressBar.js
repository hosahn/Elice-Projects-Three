import { BarWrap, Filter, Label } from '../../../styles/ProgressStyle';
import Api from '../../../api';

const ProgressBar = (props) => {
  const { completed } = props;

  return (
    <BarWrap>
      <Filter completed={completed}>
        <Label>{`${completed}회차`}</Label>
      </Filter>
    </BarWrap>
  );
};

export default ProgressBar;
