import Btn from '../components/Btn';
import styled from 'styled-components';
import images from '../assets/images';

const UserInfo = () => {
  return (
    <>
      <Btn text={'Sub'} type={'sub'} />
      <Btn text={'Main'} type={'main'} />
    </>
  );
};

export default UserInfo;
