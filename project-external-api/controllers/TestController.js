

const asyncHandler = require("express-async-handler");

exports.login = asyncHandler(async (req, res) => {
  const success = true;
  const {username,password} = req.body;
  console.log(username);
  console.log(password);
  const message = "Order saved successfully";
  res.send({ success, message});
  });

exports.test = asyncHandler(async (req, res, next) => {
  const success = true;
  const message = {
      "title": "Server Response",
      "description": "Response from server",
      "published": true,
      "__v": 0
    };
  const flag = true;
  res.send({ flag, message});
  });
