import axios from "axios";
import React, { useState, useEffect } from "react";

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

  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  const emailHandler = (e) => {
    e.preventDefault();
    SetEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    e.preventDefault();
    SetPassword(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    // state에 저장한 값을 가져옵니다.
    let body = {
      email: Email,
      pw: Password,
    };
    await axios.post("http://localhost:5001/login/local", body).then((e) => {
      window.open("http://localhost:5001/user/main", "_self");
    });
  };

  return (
    <div>
      <button onClick={localHandler}>locallogin</button>
      <button onClick={googleHandler}>googleLogin</button>
      <button onClick={kakaoHandler}>kakaoLogin</button>
      <button onClick={naverHandler}>naverLogin</button>
      <button onClick={logoutHandler}>logout</button>
      <form
        onSubmit={submitHandler}
        style={{ display: "flex", flexDirection: "Column" }}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={emailHandler}></input>
        <label>Password</label>
        <input
          type="password"
          value={Password}
          onChange={passwordHandler}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
