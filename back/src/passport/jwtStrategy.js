import { User } from "../db/index.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import "../config/env.js";

//config
const JWTConfig = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY,
};

//verify
const JWTVerify = async (jwtPayload, done) => {
  console.log("inside veri");
  try {
    const id = jwtPayload.user_id;
    const user = await User.findUserById({ id });
    if (user) {
      done(null, user);
      return;
    }
    done(null, false, { reason: "올바르지 않은 인증정보 입니다." });
  } catch (error) {
    console.error(error);
    done(error);
  }
};
//export
export const JwtStrategy = () => {
  passport.use("jwt", new Strategy(JWTConfig, JWTVerify));
};
