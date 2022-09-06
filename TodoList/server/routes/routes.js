import express from 'express';

import {
	getAllTasks,
	getTaskById,
	createTask,
	updateTaskById,
	deleteTaskById,
} from '../controllers/task.js';

const router = express.Router();

router.get('/api/task/', getAllTasks);

router.get('/api/task/:id', getTaskById);

router.post('/api/task/', createTask);

router.patch('/api/task/:id', updateTaskById);

router.delete('/api/task/:id', deleteTaskById);

router.get('/public', (req, res, next) => {
	res.status(200).json({ message: 'here is your public resource' });
});

// will match any other path
router.use('/', (req, res, next) => {
	res.status(404).json({ error: 'page not found' });
});

export default router;
