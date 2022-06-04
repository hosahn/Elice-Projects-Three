import { User } from "../db/index.js";
import passport from "passport";
import { Strategy } from "passport-local";
import "../config/env.js";
//config
export const LocalStrategy = () => {
  passport.use(
    new Strategy(function (username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (!user.verifyPassword(password)) {
          return done(null, false);
        }
        return done(null, user);
      });
    })
  );
};
