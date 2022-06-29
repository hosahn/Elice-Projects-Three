import { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { emotionState } from '../../atoms';
import ActivityInfo from './ActivityInfo';
import * as Api from '../../api';

const MainEmotionInfo = () => {
  const emotion = useRecoilValue(emotionState);
  const [getEmotion, setGetEmotion] = useState(0);
  const [getActivity, setGetActivity] = useState([]);
  const [openEmotion, setEmotion] = useState(false);

  useEffect(() => {
    if (emotion) {
      setGetEmotion(2);
    }
  }, []);

  const clickBell = async () => {
    const res = await Api.post('confirmed/submit', {
      emotion,
    });
    setGetActivity(res.data);
    setGetEmotion(0);
    setEmotion(true);
  };

  return (
    <>
      <MoveBtn onClick={clickBell} disabled={getEmotion === 0}>
        <Badge badgeContent={getEmotion} color="primary">
          <FontAwesomeIcon icon={faBell} className="user" />
        </Badge>
      </MoveBtn>
      {openEmotion && (
        <ActivityInfo
          setEmotion={setEmotion}
          getActivity={getActivity}
          emotion={emotion}
        />
      )}
    </>
  );
};

export default MainEmotionInfo;

const MoveBtn = styled.button`
  color: gray;
  font-size: 20px;
  margin-top: 20px;
`;
