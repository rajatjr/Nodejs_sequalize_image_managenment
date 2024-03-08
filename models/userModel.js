const Sequelize = require("sequelize");
const sequelize = require("../db");
const Gallery = require("./galleryModel");

const User = sequelize.define("testUser", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull:false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull:false
    },
    password: {
        type : Sequelize.STRING,
        allowNull:false
    }
});


User.hasMany(Gallery);
Gallery.belongsTo(User);


module.exports = User;