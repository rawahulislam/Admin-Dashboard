const express = require("express");
const router = express.Router();
const { checkPassword } = require("../middlewares/checkPassword");
const { sendUserData } = require("../businesslogic/userData");
const { WelcomeNote } = require("../businesslogic/welcome");

router.post("/", checkPassword, sendUserData);
router.get("/", WelcomeNote);

module.exports = router;
