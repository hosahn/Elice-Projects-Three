import { User } from "../db/index.js";
import passport from "passport";
import { KakaoStrategy } from "./kakaoStrategy.js";
import { GoogleStrategy } from "./googleStrategy.js";
import { LocalStrategy } from "./localStrategy.js";

export const passportStrategies = () => {
  passport.serializeUser((user, done) => {
    // Strategy 성공 시 호출됨
    done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
  });
  passport.deserializeUser((user, done) => {
    console.log(user);
    // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
    done(null, user); // 여기의 user가 req.user가 됨
  });
  passport.use("kakao", KakaoStrategy);
  passport.use("google", GoogleStrategy);
  passport.use("local", LocalStrategy);
};
