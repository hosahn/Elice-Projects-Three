import { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { emotionState } from '../../atoms';
import ActivityInfo from './ActivityInfo';
import * as Api from '../../api';

const MainEmotionInfo = () => {
  const [emotion, setEmotion] = useRecoilState(emotionState);
  const [getEmotion, setGetEmotion] = useState(0);
  const [getFortune, setGetFortune] = useState('');
  const [getActivity, setGetActivity] = useState([]);
  const [openEmotion, setOpenEmotion] = useState(false);

  useEffect(() => {
    if (emotion) {
      setGetEmotion(2);
    }
  }, []);

  const clickBell = async () => {
    const res = await Api.post('confirmed/submit', {
      emotion,
    });
    const fortune = await Api.get('confirmed/fortune');
    setGetFortune(fortune.data);
    setGetActivity(res.data);
    setGetEmotion(0);
    setOpenEmotion(true);
    setEmotion('');
  };

  return (
    <>
      <MoveBtn
        onClick={clickBell}
        disabled={getEmotion === 0}
        getEmotion={getEmotion}
      >
        <Badge badgeContent={getEmotion} color="primary">
          <FontAwesomeIcon icon={faEnvelope} className="user" />
        </Badge>
      </MoveBtn>
      {openEmotion && (
        <ActivityInfo
          setEmotion={setOpenEmotion}
          getFortune={getFortune}
          getActivity={getActivity}
          emotion={emotion}
        />
      )}
    </>
  );
};

export default MainEmotionInfo;

const MoveBtn = styled.button`
  color: ${(props) => (props.getEmotion === 0 ? '#adb5bd' : '#ffd43b')};
  font-size: 25px;
  margin-top: 20px;
`;
