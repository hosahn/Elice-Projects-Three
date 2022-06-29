import passport from "passport";
import { Strategy } from "passport-local";
import "../config/env.js";
import { PrismaClient } from "@prisma/client";
import { User } from "../db/index.js";

const prisma = new PrismaClient();
//config

const option = {
  usernameField: "email",
  passwordField: "pw",
};
const verify = async (username, password, done) => {
  const result = await User.findUser({
    email: username,
    pw: password,
    social: "local",
  });
  if (result) {
    console.log(result);
    done(null, result);
  } else {
    done(null, false);
  }
};

export const LocalStrategy = () => {
  passport.use("local", new Strategy(option, verify));
};
