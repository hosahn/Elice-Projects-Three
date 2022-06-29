import React from "react";
import * as style from "../styles/LandingStyle";
import LandingNav from "../components/nav/LandingNav";
import MainFooter from "../components/footer";
import MemberCard from "../components/MemberCard";

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
        <MemberCard />
      </style.MainContainer>
      <MainFooter></MainFooter>
    </>
  );
};

export default AboutUs;
