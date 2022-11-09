const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const createError = require("http-errors");

const testRouter = require("./routes/TestRouter");
const { accessLogger } = require("./util/access_log");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(accessLogger);

app.use("/external", testRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;
