import express from 'express';
import session from 'express-session';
import flash from 'connect-flash';
import path from 'path';

import spamRoutes from "./routes/spammer";
import { errorHandler } from './middlewares/errorHandler';
import config from './config/config';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: config.flashSecret,
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(flash());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", spamRoutes);

app.use(errorHandler);

export default app;
