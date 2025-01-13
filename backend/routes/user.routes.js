const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.post("/save-user/:username", controller.saveUserData);

router.get("/mutual-friends/:username", controller.findMutualFollowers);

router.get("/search-users", controller.searchUsers);

router.patch("/delete-user/:username", controller.softDeleteUser);

router.patch("/update-user/:username", controller.updateUserData);

router.get("/users", controller.getUsersSorted);

module.exports = router;
