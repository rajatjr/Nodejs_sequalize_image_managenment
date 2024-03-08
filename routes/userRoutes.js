const express = require("express");
const { getAllImages } = require("../controller/galleryController");
const { createUser, getUsers, login, getUsersByEmail, uploadImage, getUsersById,  } = require("../controller/userController");
const router = express.Router();


router.post("/register",createUser);

router.post("/login",login);

router.get("/users",getUsers);

router.post("/userById",getUsersById);




module.exports = router;