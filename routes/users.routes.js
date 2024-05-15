const express = require("express");
const router = express.Router();

const {
  createUser,
  updateUser,
  deleteUserById,
  getAll,
  getUserById,
} = require("../controllers/users.controller");
const { userLogin } = require("../controllers/users.controller");
router.post("/createUser", createUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUserById);
router.get("/Users", getAll);
router.get("/User/:id", getUserById);
router.post("/userLogin", userLogin);
module.exports = router;
