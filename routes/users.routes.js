const express= require('express');
const router=  express.Router();

const { createUser, updateUser, deleteUserById, getAll, getUserById } = require('../controllers/users.controller');
const verifyIfLoggedIn = require('../middlewares/VerifyIfLoggedIn');
const { userLogin } = require('../controllers/users.controller');
router.post("/createUser", createUser)
router.put("/update/:id", updateUser)
router.delete('/delete/:id', deleteUserById)
router.get("/all",verifyIfLoggedIn, getAll)
router.get("/User/:id", getUserById)
router.post("/login", userLogin)
module.exports= router;