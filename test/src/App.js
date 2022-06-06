import Axios from "axios";

function App() {
  const localHandler = () => {
    window.open("http://localhost:5001/login/google", "_self");
  };
  const googleHandler = () => {
    window.open("http://localhost:5001/login/google", "_self");
  };
  const kakaoHandler = () => {
    window.open("http://localhost:5001/login/kakao", "_self");
  };
  const naverHandler = () => {
    window.open("http://localhost:5001/login/naver", "_self");
  };
  const logoutHandler = () => {
    window.open("http://localhost:5001/user/logout", "_self");
  };

  return (
    <div>
      <button onClick={localHandler}>locallogin</button>
      <button onClick={googleHandler}>googleLogin</button>
      <button onClick={kakaoHandler}>kakaoLogin</button>
      <button onClick={naverHandler}>naverLogin</button>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
}

export default App;
