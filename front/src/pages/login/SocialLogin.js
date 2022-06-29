import images from "../../assets/images";
import { SocialBtn, Img } from "../../styles/LoginStyle";

const SocialLogin = () => {
  const googleUrl = "http://localhost:5001/login/google";
  const kakaoUrl = "http://localhost:5001/login/google";
  const naverUrl = "http://localhost:5001/login/google";

  const clickGoogle = () => {
    window.open(`${googleUrl}`, "_self");
  };
  const clickKakao = () => {
    window.open(`${kakaoUrl}`, "_self");
  };
  const clickNaver = () => {
    window.open(`${naverUrl}`, "_self");
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
