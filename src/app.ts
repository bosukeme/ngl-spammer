import express from 'express';
import session from 'express-session';
import flash from 'connect-flash';

import spamRoutes from "./routes/spammer";
import { errorHandler } from './middlewares/errorHandler';
import config from './config/config';

const app = express();

app.use(
  session({
    secret: config.flashSecret,
    resave: false,
    saveUninitialized: true,
  }),
);

app.set('view engine', 'ejs');

app.use(flash());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.use("/", spamRoutes);

app.use(errorHandler);

export default app;
