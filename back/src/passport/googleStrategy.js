import { User } from "../db/index.js";
import { Strategy } from "passport-google-oauth20";
import passport from "passport";
import "../config/env.js";

export const GoogleStrategy = () => {
  passport.use(
    new Strategy(
      {
        clientID:
          "179133829251-7vr8utiaenff1sheqp8rgdlill3qa34d.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:5001/user/googlecomplete",
        passReqToCallback: true,
      },
      (request, accessToken, refreshToken, profile, done) => {
        console.log(profile);
        return done(null, profile);
      }
    )
  );
};
