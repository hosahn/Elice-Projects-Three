import passport from "passport";
import { Strategy } from "passport-local";
import "../config/env.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//config

const option = {
  usernameField: "email",
  passwordField: "pw",
};
const verify = async (username, password, done) => {
  const result = await prisma.users.findMany({
    where: {
      email: username,
      pw: password,
      social: "local",
    },
  });
  if (result.length > 0) {
    done(null, username);
  } else {
    done(false, username);
  }
};

export const LocalStrategy = () => {
  passport.use(new Strategy(option, verify));
};
