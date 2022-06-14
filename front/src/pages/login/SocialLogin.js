import images from '../../assets/images';
import { SocialBtn, Img } from '../../styles/LoginStyle';

const SocialLogin = () => {
  const clickGoogle = () => {
    window.open('http://localhost:5001/login/google', '_self');
  };
  const clickKakao = () => {
    window.open('http://localhost:5001/login/kakao', '_self');
  };
  const clickNaver = () => {
    window.open('http://localhost:5001/login/naver', '_self');
  };

  return (
    <>
      <SocialBtn onClick={clickGoogle}>
        <Img src={images.Google} alt="google" />
      </SocialBtn>
      <SocialBtn onClick={clickKakao}>
        <Img src={images.Kakao} alt="kakao" />
      </SocialBtn>
      <SocialBtn onClick={clickNaver}>
        <Img src={images.Naver} alt="naver" />
      </SocialBtn>
    </>
  );
};

export default SocialLogin;
