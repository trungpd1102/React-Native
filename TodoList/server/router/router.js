import express from 'express';

import {
	getAllTasks,
	getTaskById,
	createTask,
	updateTaskById,
	deleteTaskById,
} from '../controllers/task.js';

const router = express.Router();

router.get('/task', getAllTasks);

router.get('/task/:id', getTaskById);

router.post('/task', createTask);

router.patch('/task/:id', updateTaskById);

router.delete('/task/:id', deleteTaskById);

router.get('/public', (req, res, next) => {
	res.status(200).json({ message: 'here is your public resource' });
});

// will match any other path
router.use('/', (req, res, next) => {
	res.status(404).json({ error: 'page not found' });
});

export default router;
