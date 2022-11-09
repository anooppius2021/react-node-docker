/**
 * @copyright Copyright(c) 2018 Al-Futtaim Group.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Al-Futtaim ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Al-Futtaim.
 *
 */

const morgan = require("morgan");
const fs = require("fs");
const rfs = require("rotating-file-stream");
const { fileName, location, length } = require("../config/config").log;

if (!fs.existsSync(location)) {
  fs.mkdirSync(location);
}

/**
 * This method will create accessLogStream with specified filename, length and path
 * for saving log data
 * @param {string} fileName name of the file in which the logs are stored
 * @param {string} length maximum size of the file in which the logs are stored
 * @param {string} location path of the log file
 */
const accessLogStream = rfs(fileName, {
  size: length,
  path: location,
});

/**
 * This method will create acceLogger object in the following format
 * :date[web]] \":method :url HTTP/:http-version\" :status
 * @param {object} accessLogStream object of the accessLogStream
 */
exports.accessLogger = morgan("[:date[web]] \":method :url HTTP/:http-version\" :status", {
  stream: accessLogStream,
});
