import { User } from "../db/index.js";
import { Strategy } from "passport-google-oauth20";
import passport from "passport";
import "../config/env.js";

export const GoogleStrategy = new Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5001/user/complete",
    passReqToCallback: true,
  },
  (request, accessToken, refreshToken, profile, done) => {
    console.log(profile);
    return done(null, profile);
  }
);
