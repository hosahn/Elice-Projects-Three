import { User } from "../db/index.js";
import { Strategy } from "passport-kakao";
import passport from "passport";
import "../config/env.js";

export const KakaoStrategy = new Strategy(
  {
    clientID: process.env.KAKAO_CLIENT_ID,
    clientSecret: process.env.KAKAO_CLIENT_SECRET,
    callbackURL: "http://localhost:5001/user/complete",
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    return done(null, profile);
  }
);
