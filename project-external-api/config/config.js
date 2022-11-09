const constants = require("../util/constants");

const config = {
  log: {
    fileName: "external-api-HTTP.log",
    location: process.env.logPath || "./log",
    length: "10M",
    appName: process.env.APP_NAME || "STATUS-PROCESSOR",
  },
};

module.exports = config;
