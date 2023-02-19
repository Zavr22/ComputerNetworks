import {Sequelize} from "sequelize";
import sequelize from '../utils/database.js';


const Books = sequelize.define('books', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    regNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    year: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    publisher: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pagesAmount: {
        type: Sequelize.INTEGER,
        allowNull: null
    }

});

export default Books