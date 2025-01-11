const express = require("express");
const router = express.Router();
const { searchUser, getUsers, patchUser, deleteUser } = require("../controllers/GitUserController");

// Routes beginning with /gitApi/
router.get("/searchUser", searchUser);
router.get("/allUsers", getUsers);
router.patch("/update/:login", patchUser);
router.delete("/delete/:login", deleteUser);

module.exports = router;
