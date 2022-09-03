import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sys', 'root', 'namcobandai95', {
	dialect: 'mysql',
	host: 'localhost',
});

export default sequelize;
