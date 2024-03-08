const Sequelize = require("sequelize");
const sequelize = require("../db");

const Category = require("./categoryModel");
const Gallery = require("./galleryModel");


const imageCategory = sequelize.define("testImageCategory", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    testCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: Category, 
          key: 'id'
        }
      },
      testGalleryId: {
        type: Sequelize.INTEGER,
        references: {
          model: Gallery, 
          key: 'id'
        }
      }
});

Category.belongsToMany(Gallery, { through: imageCategory });
Gallery.belongsToMany(Category, { through: imageCategory });


module.exports = imageCategory;