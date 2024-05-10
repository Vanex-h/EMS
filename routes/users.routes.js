const express= require('express');
const router=  express.Router();

const { createUser, updateUser, deleteUserById, getAll, getUserById, empLogin } = require('../controllers/Users.controller');
const verifyIfLoggedIn = require('../middlewares/VerifyIfLoggedIn');
router.post("/createUser", createUser)
router.put("/update/:id", updateUser)
router.delete('/delete/:id', deleteUserById)
router.get("/all",verifyIfLoggedIn, getAll)
router.get("/User/:id", getUserById)
router.post("/login", empLogin)
module.exports= router;