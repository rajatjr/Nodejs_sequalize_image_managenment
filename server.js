const sequelize = require("./db");
const User = require("./models/userModel");
const Category = require("./models/categoryModel");
const Gallery = require("./models/galleryModel");
const ImageCategory = require("./models/imageCategoryModel");

const init=async()=>{
        try {
            await sequelize.authenticate().then(
                console.log("DB connected")
            ).catch(e=>{
                console.log(e);
            })
            syncAll=()=>{
                User.sync().then(
                    console.log("USER table synced success")
                ).catch((e)=>{
                    console.log("error:",e)
                })
                Gallery.sync();
                Category.sync();
                ImageCategory.sync();
            }
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
      syncAll();  
    }
    // init();
        
module.exports = init;