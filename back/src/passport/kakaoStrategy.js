import { Strategy } from "passport-kakao";
import passport from "passport";
import "../config/env.js";
import { PrismaClient } from "@prisma/client";
import { User } from "../db/models/User.js";
const prisma = new PrismaClient();

const option = {
  clientID: process.env.KAKAO_CLIENT_ID,
  clientSecret: "Qte99kpuJKNq1DWF3M3v7cEbc9LUuNPt",
  callbackURL: "http://localhost:5001/user/kakaocomplete",
};

const verify = async (accessToken, refreshToken, profile, done) => {
  const email = profile._json.kakao_account.email;

  const name = profile._json.properties.nickname;
  const result = await User.findUser({ email, social: "kakao" });
  try {
    if (result) {
      return done(null, result);
    } else {
      const hashedPW = bcrypt.hashSync(
        process.env.LOCAL_PASSWORD,
        process.env.SALT_ROUND
      );
      const createdUser = await prisma.users.create({
        data: {
          email: email,
          pw: hashedPW,
          social: "kakao",
          name: name,
        },
      });
      return done(null, createdUser);
    }
  } catch (error) {
    return done(false, result);
  }
};

export const KakaoStrategy = () => {
  passport.use("kakao", new Strategy(option, verify));
};
