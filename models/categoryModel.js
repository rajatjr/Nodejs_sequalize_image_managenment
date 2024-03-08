const Sequelize = require("sequelize");
const sequelize = require("../db");

const Category = sequelize.define("testCategory", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoryName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull:false
    }
});


module.exports = Category;