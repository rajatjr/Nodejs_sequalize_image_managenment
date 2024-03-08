const Sequelize = require("sequelize");
const sequelize = require("../db");

const Gallery = sequelize.define("testGallery", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    imageUrl: {
        type: Sequelize.STRING,
        unique: true,
        allowNull:false
    },
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull:false
    }
});



module.exports = Gallery;
