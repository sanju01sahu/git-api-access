const express = require("express");
const router = express.Router();
const { searchUser } = require("../controllers/GitUserController");

// Routes beginning with /api/auth
router.post("/searchUser", searchUser);
router.post();

module.exports = router;