import { Strategy } from "passport-naver";
import passport from "passport";
import "../config/env.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const option = {
  clientID: "7hJkySe9Xcnn2I_rpM6q",
  clientSecret: "uZ5kmRv9QQ",
  callbackURL: "http://localhost:5001/user/navercomplete",
};

const verify = async (accessToken, refreshToken, profile, done) => {
  const email = profile._json.email;
  const result = await prisma.users.findMany({
    where: {
      email: email,
      social: "naver",
    },
  });
  try {
    if (result.length > 0) {
      console.log("logged in");
      return done(null, profile);
    } else {
      console.log("signed up");
      const createdUser = await prisma.users.create({
        data: {
          email: email,
          pw: "1234",
          social: "naver",
        },
      });
      console.log(createdUser);
      return done(null, profile);
    }
  } catch (error) {
    return done(false, profile);
  }
};

export const NaverStrategy = () => {
  passport.use(new Strategy(option, verify));
};
