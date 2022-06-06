import { Strategy } from "passport-google-oauth20";
import passport from "passport";
import "../config/env.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

const option = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5001/user/googlecomplete",
  passReqToCallback: true,
};

const verify = async (request, accessToken, refreshToken, profile, done) => {
  console.log(profile.id);
  console.log(profile.emails[0].value);
  const email = profile.emails[0].value;
  const result = await prisma.users.findMany({
    where: {
      email: email,
      social: "google",
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
          social: "google",
        },
      });
      console.log(createdUser);
      return done(null, profile);
    }
  } catch (error) {
    return done(false, profile);
  }
};
export const GoogleStrategy = () => {
  passport.use(new Strategy(option, verify));
};
