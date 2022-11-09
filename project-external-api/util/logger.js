/**
 * @copyright Copyright(c) 2019 Al-Futtaim Group.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Al-Futtaim ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Al-Futtaim.
 *
 */

require("winston-daily-rotate-file");
const { createLogger, transports, format } = require("winston");

const fs = require("fs");
const path = require("path");
const { fileName, location } = require("../config/config").log;

if (!fs.existsSync(location)) {
  fs.mkdirSync(location);
}
const customFormat = format.combine(
  format.label({ label: "EXTERNAL-API" }),
  format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  format.printf(
    (info) => `${info.timestamp} ${info.level} [${info.label}] ${info.message}`
  )
);

const level = process.env.LOG_LEVEL || "debug";
const { combine, timestamp, printf } = format;
const appLogFileName = "external-api.log";

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: `${location}/%DATE%-${appLogFileName}`,
  format: customFormat,
  level,
});

/**
 * This will create an instance of winstor logger componet,
 * which will print log statements in the following format
 * eg: info.timestamp : info.level : info.message
 */
const winstonLogger = createLogger({
  format: combine(
    timestamp(),
    printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    dailyRotateFileTransport,
    new transports.Console({
      filename: path.join(location, fileName),
      handleExceptions: true,
      humanReadableUnhandledException: true,
      level,
    }),
  ],
});

module.exports = (moduleName) => {
  const logger = {
    error(text) {
      winstonLogger.error(`${moduleName}: ${text}`);
    },
    warn(text) {
      winstonLogger.warn(`${moduleName}: ${text}`);
    },
    info(text) {
      winstonLogger.info(`${moduleName}: ${text}`);
    },
    debug(text) {
      winstonLogger.debug(`${moduleName}: ${text}`);
    },
  };
  return logger;
};
