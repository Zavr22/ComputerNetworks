import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('matrixLab', 'root', 'Rekbr345', {
    dialect: 'mysql',
    host: 'localhost',
});

export default sequelize;