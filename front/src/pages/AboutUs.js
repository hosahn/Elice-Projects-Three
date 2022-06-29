import React from "react";
import * as style from "../styles/LandingStyle";
import LandingNav from "../components/nav/LandingNav";
import MainFooter from "../components/footer";
import MemberCard from "../components/MemberCard";
import styled from "styled-components";

const Hosan = require("../images/Hosan.jpg");
const Nayeon = require("../images/Nayeon.jpg");
const Jooyeong = require("../images/Jooyeong.jpg");
const GwangCheon = require("../images/GwangCheon.jpg");
const Notion = require("../images/Notion.png");
const Figma = require("../images/Figma.png");

const CardDiv = styled.div`
  border-radius: 30px;
  position: relative;
  margin: auto;
  top: 600px;
  width: 900px;
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: right;
`;

const IntroDiv = styled.div`
  border-radius: 30px;
  position: relative;
  margin: auto;
  top: 100px;
  line-height: 80px;
  width: 1000px;
  height: 660px;
  display: flex;
  flex-direction: column;
  align: left;
  align-items: left;
`;

const ProDiv = styled.div`
  opacity: 0.78;
  border-radius: 30px;
  position: relative;
  margin: auto;
  top: 550px;
  width: 1050px;
  height: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Introduce = styled.div`
  font-family: "EliceDigitalBaeum_Bold";
  font-size: 50px;
  text-align: center;
  color: white;
  top: 500px;
  word-spacing: 10px;
`;

const MySelf = styled.div`
  font-family: "EliceDigitalBaeum_Bold";
  font-size: 40px;
  text-align: center;
  color: white;
  top: 500px;
  word-spacing: 10px;
`;

const About = styled.div`
  font-family: "EliceDigitalBaeum_Bold";
  font-size: 64px;
  text-align: center;
  color: white;
  top: 300px;
`;

const AboutUs = () => {
  return (
    <>
      <style.MainContainer>
        <LandingNav />
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <style.StarFalling></style.StarFalling>
        <About>About-Us</About>
        <Introduce>12팀 멤버를 소개합니다!</Introduce>
        <CardDiv>
          <MemberCard
            memberInfo={{
              img: Hosan,
              title: "이호산",
              author: "Back-End",
              github: "https://github.com/hosahn/hosahn.github.io",
              email: "hosahn13@gmail.com",
            }}
          />
          <MemberCard
            memberInfo={{
              img: GwangCheon,
              title: "신광천",
              author: "Back-End",
              github: "https://github.com/hosahn/hosahn.github.io",
              email: "hosahn13@gmail.com",
            }}
          />
          <MemberCard
            memberInfo={{
              img: Nayeon,
              title: "김나연",
              author: "Front-End, Leader",
              github: "https://github.com/hosahn/hosahn.github.io",
              email: "hosahn13@gmail.com",
            }}
          />
          <MemberCard
            memberInfo={{
              img: Jooyeong,
              title: "배주영",
              author: "AI-Engineer",
              github: "https://github.com/hosahn/hosahn.github.io",
              email: "hosahn13@gmail.com",
            }}
          />
        </CardDiv>
        <Introduce>멤버들의 한마디</Introduce>
        <IntroDiv>
          {" "}
          <MySelf>나연 : 안녕하세요 프론트엔드 담당 김나연입니다!</MySelf>
          <MySelf>주영 : 안녕하세요 AI 담당 배주영입니다!</MySelf>
          <MySelf>호산 : 안녕하세요! 수린이 남친입니다!</MySelf>
          <MySelf>
            광천 : 다른 사람의 선택지에 도움을 줄 수 있는 개발자가 되고 싶은
            백엔드 담당 신광천 입니다
          </MySelf>
        </IntroDiv>
        <Introduce>12팀의 작업과정</Introduce>
        <ProDiv>
          <img
            src={Notion}
            alt="Notion"
            style={{
              width: "900px",
              height: "500px",
              marginTop: "70px",
            }}
          />
          <img
            src={Figma}
            style={{
              width: "900px",
              height: "500px",
              marginTop: "100px",
            }}
            alt="Figma"
          />
        </ProDiv>
      </style.MainContainer>
      <MainFooter></MainFooter>
    </>
  );
};

export default AboutUs;
