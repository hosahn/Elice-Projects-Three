import { Strategy } from "passport-google-oauth20";
import passport from "passport";
import "../config/env.js";
import { PrismaClient } from "@prisma/client";
import { User } from "../db/index.js";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

const option = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5001/user/googlecomplete",
  passReqToCallback: true,
};

const verify = async (request, accessToken, refreshToken, profile, done) => {
  const email = profile.emails[0].value;
  const result = await User.findUser({ email, social: "google" });
  try {
    if (result) {
      return done(null, profile);
    } else {
      const createdUser = await prisma.users.create({
        data: {
          email: email,
          pw: process.env.LOCAL_PASSWORD,
          social: "google",
          name: "밤하늘",
        },
      });
      return done(null, profile);
    }
  } catch (error) {
    return done(false, profile);
  }
};
export const GoogleStrategy = () => {
  passport.use("google", new Strategy(option, verify));
};
