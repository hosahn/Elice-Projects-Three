import { useEffect, useState } from 'react';
import { ExplainContext, HighLightExplain } from '../../styles/CommonStyle';
import GetDayExplain from './GetDayExplain';
<<<<<<< HEAD

=======
>>>>>>> origin/BE/test/HS
import getDay from '../../utils/getDay';

const Text = () => {
  const [day, setGetDay] = useState('');

  useEffect(() => {
    const day = new Date();
<<<<<<< HEAD

=======
>>>>>>> origin/BE/test/HS
    setGetDay(GetDayExplain(getDay(day)));
  }, []);

  return (
    <ExplainContext>
      <HighLightExplain>오늘은 벌써 {day}이네요. </HighLightExplain>
      <br />
      혹시 오늘 하루는 너무 평범해서 쓸 일기가 없으신가요? <br />
      원래 일기는 소소한 것에서 시작한다고 생각해요. <br />
      <HighLightExplain>
<<<<<<< HEAD
        {' '}
=======
>>>>>>> origin/BE/test/HS
        오늘 있었던 기분 좋은 일을 두 가지만 떠올려서 적어보시는 건 어떠신가요?{' '}
      </HighLightExplain>
      <br />
    </ExplainContext>
  );
};

export default Text;
