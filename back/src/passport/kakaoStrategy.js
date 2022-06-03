import { User } from "../db/index.js";
import { Strategy } from "passport-kakao";
import passport from "passport";
import "../config/env.js";

//config
const KakaoConfig = {
  clientID: process.env.KAKAO_CLIENT_ID,
  clientSecret: process.env.KAKAO_CLIENT_SECRET,
  callbackURL: "https://localhost:3000/user/complete",
};

//verify
const KakaoVerify = (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  console.log(accessToken);
  return done(null, profile);
};

//export
export const KakaoStrategy = () => {
  passport.use("kakao", new Strategy(KakaoConfig, KakaoVerify));
};
