import { User } from "../db/index.js";
import { Strategy } from "passport-google-oauth20";
import passport from "passport";
import "../config/env.js";
//config
const GoogleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "https://localhost:3000/user/complete",
  passReqToCallback: true,
};

//verify
const GoogleVerify = (request, accessToken, refreshToken, profile, done) => {
  console.log(profile);
  console.log(accessToken);
  return done(null, profile);
};

export const GoogleStrategy = () => {
  passport.use("google", new Strategy(GoogleConfig, GoogleVerify));
};
