import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { specs } from "./config/swaggerDoc.js";
import "./config/env.js";
import * as Sentry from "@sentry/node";
import compression from "compression";
import csurf from "csurf";
import helmet from "helmet";
import { loginRouter } from "./routers/loginRouter.js";
import rateLimit from "express-rate-limit";
import passport from "passport";
import { passportStrategies } from "./passport/finalStrategy.js";
import { userRouter } from "./routers/userRouter.js";
import session from "express-session";
import "./config/env.js";
import { default as connectMongoDBSession } from "connect-mongodb-session";
const MongoDBStore = connectMongoDBSession(session);
export const app = express();
Sentry.init({
  dsn: process.env.DSN,
});

const csrfProtection = csurf({ cookie: true });
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  delayMs: 0, // disable delaying — full speed until the max limit is reached
});

app.use(helmet());
app.use(cors());
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

//passport
app.use(passport.initialize());
app.use(
  session({
    secret: "secret key",
    store: new MongoDBStore({
      uri: process.env.MONGODB_URL,
      collection: "wineProject",
    }),
    resave: false,
    saveUninitialized: false,
  })
);
passportStrategies();
app.use(passport.session());

//Sentry
if (process.env.NODE_ENV === "production") {
  app.use(
    morgan("dev", {
      skip: function (req, res) {
        return res.statusCode < 400;
      },
    })
  );
} else {
  app.use(morgan("dev"));
}

app.use(Sentry.Handlers.requestHandler());
app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
app.use("/login", loginRouter);
app.use("/user", userRouter);
app.use(Sentry.Handlers.errorHandler());
export default app;
