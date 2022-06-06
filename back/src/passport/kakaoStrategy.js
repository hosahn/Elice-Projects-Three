import { Strategy } from "passport-kakao";
import passport from "passport";
import "../config/env.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const option = {
  clientID: "74a5687fe9d1d20e9b33afbb85317995",
  clientSecret: "Qte99kpuJKNq1DWF3M3v7cEbc9LUuNPt",
  callbackURL: "http://localhost:5001/user/kakaocomplete",
};

const verify = async (accessToken, refreshToken, profile, done) => {
  const email = profile._json.kakao_account.email;
  const result = await prisma.users.findMany({
    where: {
      email: email,
      social: "kakao",
    },
  });
  try {
    if (result.length > 0) {
      console.log("logged in");
      console.log(result);
      return done(null, profile);
    } else {
      console.log("signed up");
      const createdUser = await prisma.users.create({
        data: {
          email: email,
          pw: "1234",
          social: "kakao",
        },
      });
      console.log(createdUser);
      return done(null, profile);
    }
  } catch (error) {
    return done(false, profile);
  }
};

export const KakaoStrategy = () => {
  passport.use(new Strategy(option, verify));
};
