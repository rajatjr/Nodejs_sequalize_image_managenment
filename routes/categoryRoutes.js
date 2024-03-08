const express = require("express");
const { addCategory, linkCategoryToImage } = require("../controller/categoryController");
const router = express.Router();

router.post("/createCategory",addCategory);
router.post("/linkCategory",linkCategoryToImage);

module.exports = router;