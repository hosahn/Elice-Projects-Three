import Axios from "axios";

function App() {
  const jwtHandler = () => {};
  const googleHandler = () => {
    window.open("http://localhost:5001/login/google", "_self");
  };
  const kakaoHandler = () => {
    window.open("http://localhost:5001/login/kakao", "_self");
  };
  const logoutHandler = () => {
    window.open("http://localhost:5001/user/logout", "_self");
  };
  return (
    <div>
      <button onClick={jwtHandler}>jwtlogin</button>
      <button onClick={googleHandler}>googleLogin</button>
      <button onClick={kakaoHandler}>kakaoLogin</button>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
}

export default App;
