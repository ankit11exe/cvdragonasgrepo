const express = require("express");
const users = express.Router();

const { getUsers, createUser, updateUser, deleteUser, getUserById } = require("../controllers/userHandler");

users.get("/",getUsers);
users.get("/:id", getUserById);
users.post("/",createUser);
users.put("/:id",updateUser);
users.delete("/:id",deleteUser);


module.exports = users;