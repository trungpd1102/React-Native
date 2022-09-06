import Task from './../models/task.js';

const getAllTasks = async (req, res, next) => {
	try {
		console.log('geting tasks');
		const tasks = await Task.findAll();
		console.log({ tasks });
		if (tasks.length >= 0) {
			res.status(200).json({ message: 'Get all tasks successfully!', docContent: tasks });
		}
	} catch (error) {
		console.log('error: ' + error);
		res.status(500).json({ message: 'Something went wrong' });
	}
};

const getTaskById = async (req, res, next) => {
	try {
		const id = req.params;
		console.log({ id });
		if (!id) {
			res.status(400).json({ message: 'No task id provided' });
			return;
		}

		const task = await Task.findByPk(id);
		console.log({ task });
		res.status(200).json({ message: 'Get task successfully!', docContent: task });
	} catch (error) {
		console.log('error: ' + error);
		res.status(500).json({ message: 'Something went wrong' });
	}
};

const createTask = async (req, res, next) => {
	try {
		const newTask = req.body.task;
		console.log({ newTask });

		if (!newTask) {
			res.status(400).json({ message: 'Task could not be empty' });
			return;
		}

		const task = await Task.create({ task: newTask });
		await task.save();
		console.log({ task });

		res.status(200).json({ message: 'Create task successfully', docContent: task });
	} catch (error) {
		console.log('error: ' + error);
		res.status(500).json({ message: 'Something went wrong' });
	}
};

const updateTaskById = async (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
		const newTask = req.body.task;
		console.log({ newTask });

		if (!id) {
			res.status(400).json({ message: 'No task id provided' });
			return;
		}
		if (!newTask) {
			res.status(400).json({ message: 'Task could not be empty' });
			return;
		}

		const task = await Task.findByPk(id);
		const result = await task.update({ task: newTask });
		await task.save();
		console.log({ result });

		res.status(200).json({ message: 'Update task successfully', docContent: result });
	} catch (error) {
		console.log('error: ' + error);
		res.status(500).json({ message: 'Something went wrong' });
	}
};

const deleteTaskById = async (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
		console.log({ id });

		if (!id) {
			res.status(400).json({ message: 'No task id provided' });
			return;
		}

		const task = await Task.findByPk(id);
		await task.destroy();

		res.status(200).json({ message: 'Delete task successfully' });
	} catch (error) {
		console.log('error: ' + error);
		res.status(500).json({ message: 'Something went wrong' });
	}
};

export { getAllTasks, getTaskById, createTask, updateTaskById, deleteTaskById };
