const userData = require("../usersdata.json");

function sendUserData(req, res) {
  res.send(userData);
}

module.exports = {
  sendUserData: sendUserData,
};
