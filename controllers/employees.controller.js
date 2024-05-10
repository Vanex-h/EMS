const express = require("express");
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
  try {

    const  { FirstName, LastName, Email, Password } = req.body;

    const passHashed = await bcrypt.hash(password, 10);
    console.log(passHashed);

    await User.create({
      FirstName,
      LastName,
      Email,
      Password: passHashed,      
    });
    return res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

const getAll = async (req, res) => {
  try {
    const data = await User.findAll({});
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
const getUserById = async (req, res) => {
  try {
    const {id} = req.params;
    const User = await User.findByPk(id);
    if (User) {
      console.log(User);
      return res.json(User);
    } else {
      return res.status(404).json({ message: "That User doesn't exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const {id} = req.params;
    const { FirstName, LastName, Email } = req.body;
   const user= await User.findByPk(id);
    if (user) {
      await user.update({
        FirstName,
        LastName,
        Email,
      })
      return res.json({ message: "User updated successfully", user });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.status(200).json({ message: "Successfully deleted the User" });
    } else {
      return res.status(404).json({ message: "That User doesn't exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const userLogin = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const user = await User.findOne({ where: { Email } });
    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    const passwordMatch = await bcrypt.compare(Password, user.Password);
    if (!passwordMatch) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      {
        id: user.ID,
        FirstName: user.FirstName,
        LastName: user.LastName,
        Email: user.Email,
      },
      process.env.JWT_SECRET
    );
    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};



const getUserProfile=async(res,req)=>{
    const id= req.body.id
    const User= await User.findById(id)
    return res.status(200).json({message: "User profile found", User})
}

module.exports = {
  createUser,
  getAll,
  getUserById,
  deleteUserById,
  updateUser,
  userLogin,
  getUserProfile
};