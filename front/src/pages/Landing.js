import React, { useEffect, useState } from "react";
import styled from "styled-components";
import images from "../assets/images";
import * as style from "../styles/LandingStyle";
import LandingNav from "../components/nav/LandingNav";
import MainFooter from "../components/footer";

const Landing = () => {
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
        <style.LogoContainer>
          <style.LineOne />
          <style.LineTwo />
          <style.LineThree />
          <style.LineFour />
          <style.Note />
          <style.Note1 />
          <style.Note3 />
          <style.Note4 />
          <style.Note5 />
          <style.Note6 />
          <style.Explanation>당 신 만 의 일 기</style.Explanation>
          <style.Title>밤 하 늘</style.Title>
          <style.MoonIcon />
        </style.LogoContainer>
        <style.WhyWe>서비스 밤하늘</style.WhyWe>
        <style.SocietyProblem>해결하고자 하는 문제</style.SocietyProblem>
      </style.MainContainer>
      <MainFooter></MainFooter>
    </>
  );
};

export default Landing;
