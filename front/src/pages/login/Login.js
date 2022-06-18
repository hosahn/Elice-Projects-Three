<<<<<<< HEAD
import SocialLogin from './SocialLogin';
=======
import { useState } from "react";
import SocialLogin from "./SocialLogin";
>>>>>>> origin/BE/test/HS
import {
  LoginText,
  LoginInput,
  SocialLoginContainer,
<<<<<<< HEAD
} from '../../styles/LoginStyle';
import images from '../../assets/images';
import styled from 'styled-components';

const LoginMainContainer = styled.div`
  position: realtive;
  display: grid;
  place-items: center;
  height: 100vh;
  background-image: url(${images.Background});
=======
} from "../../styles/LoginStyle";
import images from "../../assets/images";
import styled from "styled-components";
import Btn from "../../components/Btn";
// import { validateEmail } from "../../utils/validation";
import * as Api from "../../api";
// import LandingNav from "../../components/nav/LandingNav";

const Container = styled.div`
  height: 100vh;
  background-image: url(${images.Bg});
>>>>>>> origin/BE/test/HS
  background-repeat: no-repeat;
  background-size: cover;
`;

<<<<<<< HEAD
const Login = () => {
  return (
    <LoginMainContainer props={images}>
      <div>
        <div style={{ marginTop: '1rem' }}>
          <LoginText>이메일 주소</LoginText>
          <LoginInput type="email" autoComplete="on" />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <LoginText>비밀번호</LoginText>
          <LoginInput type="email" autoComplete="on" />
        </div>
        <SocialLoginContainer>
          <SocialLogin />
        </SocialLoginContainer>
      </div>
    </LoginMainContainer>
=======
const LoginMainContainer = styled.div`
  display: grid;
  place-items: center;
  align-items: center;
  margin-top: 150px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await Api.post("login/local", {
        email,
        pw: password,
      });
      console.log(res);
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        console.error("data : ", data);
      }
    }
  };

  return (
    <Container>
      <div>
        <LoginMainContainer>
          <div style={{ marginTop: "1rem" }}>
            <LoginText>이메일 주소</LoginText>
            <LoginInput
              type="email"
              id="email-input"
              label="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <LoginText>비밀번호</LoginText>
            <LoginInput
              type="password"
              id="password-input"
              label="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div style={{ margin: "0 auto", width: "100px" }}>
            <Btn text={"로그인"} type={"sub"} onClick={clickLogin} />
          </div>
          <SocialLoginContainer>
            <SocialLogin />
          </SocialLoginContainer>
        </LoginMainContainer>
      </div>
    </Container>
>>>>>>> origin/BE/test/HS
  );
};

export default Login;
