import {Sequelize} from "sequelize";
import sequelize from '../utils/database.js';


const Matrix = sequelize.define('matrix', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    rawNum: {
        type: Sequelize.STRING,
        allowNull: false
    },
    colNum: {
        type: Sequelize.STRING
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false,
    },


});

export default Matrix