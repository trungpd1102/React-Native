import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';

const Task = sequelize.define(
	'tasks',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		task: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

export default Task;
