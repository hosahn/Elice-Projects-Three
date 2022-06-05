import { User } from "../db/index.js";
import { Strategy } from "passport-kakao";
import passport from "passport";
import "../config/env.js";

const option = {
  clientID: "74a5687fe9d1d20e9b33afbb85317995",
  clientSecret: "Qte99kpuJKNq1DWF3M3v7cEbc9LUuNPt",
  callbackURL: "http://localhost:5001/user/kakaocomplete",
};

const verify = (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  return done(null, profile);
};

export const KakaoStrategy = () => {
  passport.use(new Strategy(option, verify));
};
