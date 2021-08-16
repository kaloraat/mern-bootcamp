const express = require("express");

const router = express.Router();

const { users } = require("../controllers/auth");

router.get("/users", users);

module.exports = router;
