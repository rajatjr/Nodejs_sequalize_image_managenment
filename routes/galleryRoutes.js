const express = require("express");
const upload = require("../config");
const { createGalleryImage, linkImageToUser, getAllImages } = require("../controller/galleryController");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("gallery.ejs");
})
router.post("/addGalleryImage",createGalleryImage)
router.post("/linkImage",linkImageToUser)

router.post("/uploadImage",upload.single('avatar'),createGalleryImage);
router.get("/loadImages/:id",getAllImages);

module.exports = router;