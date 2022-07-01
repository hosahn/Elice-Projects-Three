import Modal from '../../components/modal/Modal';
import styled from 'styled-components';
import Btn from '../../components/Btn';

const ChallengeCancle = ({ setModalOpen }) => {
  const clickModal = () => {
    setModalOpen(false);
  };

  return (
    <Modal setOpen={setModalOpen}>
      <TextContainer>
        <p>다음에 다시 도전해주세요.👍</p>
        <Btn text={'확인'} onClick={clickModal} />
      </TextContainer>
    </Modal>
  );
};

export default ChallengeCancle;

const TextContainer = styled.div`
  margin-top: 50px;
  p {
    font-family: 'EliceDigitalBaeum';
    font-size: 20px;
    margin-bottom: 10px;
    color: #228be6;
  }
`;
