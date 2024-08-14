import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('Test', 'noga', '123456', {
    host: '10.0.0.62',
    port: 3306,
    dialect: 'mysql',
});

export default sequelize;