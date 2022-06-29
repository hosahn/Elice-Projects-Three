import Modal from '../../components/modal/Modal';
import styled from 'styled-components';
import { useEffect } from 'react';

const ActivityInfo = (props) => {
  const { setEmotion, getActivity, emotion } = props;

  useEffect(() => {
    console.log(getActivity.activity[0].title);
  }, []);

  return (
    <Modal setOpen={setEmotion}>
      <ActivityContainer>
        오늘의 감정 <span>{emotion}</span> 에 맞는 음악과 활동 추천드려요..!
        <br />
        🎵 추천 음악 :{' '}
        <span>
          {' '}
          {getActivity.music[0].title} - {getActivity.music[0].artist}
        </span>{' '}
        <br />
        🔥 추천 활동 : <span> {getActivity.activity[0].title}</span> <br />
      </ActivityContainer>
    </Modal>
  );
};

export default ActivityInfo;

const ActivityContainer = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  font-family: 'EliceDigitalBaeum';
  font-size: 18px;
  text-align: left;
  line-height: 25px;
  span {
    background-image: linear-gradient(transparent 20%, #d0ebff 20%);
  }
`;
