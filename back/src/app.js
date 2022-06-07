import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { specs } from "./config/swaggerDoc.js";
import "./config/env.js";
import * as Sentry from "@sentry/node";
import { BrowserTracing } from "@sentry/tracing";
import compression from "compression";
import csurf from "csurf";
import helmet from "helmet";
import { loginRouter } from "./routers/loginRouter.js";
import rateLimit from "express-rate-limit";
import passport from "passport";
import { passportStrategies } from "./passport/finalStrategy.js";
import { userRouter } from "./routers/userRouter.js";
import session from "express-session";
import { default as mysqlSession } from "express-mysql-session";
import mysql from "mysql";
import { basicRouter } from "./routers/basicRouter.js";
import { calendarRouter } from "./routers/calendarRouter.js";

process.setMaxListeners(15);
const mysqlStore = mysqlSession(session);
export const app = express();

Sentry.init({
  dsn: process.env.DSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const csrfProtection = csurf({ cookie: true });

var options = {
  host: process.env.MYSQL_HOST,
  port: 3306,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "sessionstore",
};
var connection = mysql.createConnection(options);
var sessionStore = new mysqlStore(options, connection);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  delayMs: 0, // disable delaying — full speed until the max limit is reached
});

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000", // server의 url이 아닌, 요청하는 client의 url
    credentials: true,
  })
);

app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

//passport
app.use(
  session({
    secret: "secret key",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    expires: new Date(Date.now() + 60 * 30),
  })
);
passportStrategies();
app.use(passport.initialize());
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
app.use("/basic", basicRouter);
app.use("/calendar", calendarRouter);

app.use(Sentry.Handlers.errorHandler());
export default app;
