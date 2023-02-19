import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('book', 'root', 'Rekbr345', {
    dialect: 'mysql',
    host: 'localhost',
});

export default sequelize;