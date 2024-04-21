require("dotenv").config();
const psw = process.env.PASSWORD;

function checkPassword(req, res, next) {
  const password = req.body.password;
  if (!password || password !== psw) {
    return res.status(401).send("Unauthorized: Wrong password");
  }
  next();
}

module.exports = {
  checkPassword: checkPassword,
};
