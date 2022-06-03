import express from "express";
import cors from "cors";
import morgan from "morgan";
import { basicRouter } from "./routers/basicRouter.js";
import swaggerUi from "swagger-ui-express";
import { specs } from "./config/swaggerDoc.js";
import "./config/env.js";
import * as Sentry from "@sentry/node";
import { BrowserTracing } from "@sentry/tracing";
import compression from "compression";
import csurf from "csurf";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

export const app = express();

Sentry.init({
  dsn: process.env.DSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const csrfProtection = csurf({ cookie: true });

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  delayMs: 0, // disable delaying — full speed until the max limit is reached
});

app.use(limiter);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

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

app.use("/basic", basicRouter);

app.use(Sentry.Handlers.errorHandler());

export default app;
