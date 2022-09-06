import ApiService from './api.service';

const serviceURL = 'task';
const TaskService = {
	/**
	 * Acquire task by taskId
	 * @param {Integer} taskId
	 * @returns {Object} Task details
	 */
	async getAll() {
		try {
			return await ApiService.get(`${serviceURL}`);
		} catch (errors) {
			console.log('error:' + errors);
		}
	},

	/**
	 * Acquire task by taskId
	 * @param {Integer} taskId
	 * @returns {Object} Task details
	 */
	async get(taskId) {
		try {
			return await ApiService.get(`${serviceURL}`, `${taskId}`);
		} catch (errors) {
			console.log('error:' + errors);
		}
	},

	/**
	 * Create new task record
	 * @param {Object} body {task Object}
	 * @returns {Object} include success message and record ID
	 */
	async post(body) {
		try {
			return await ApiService.post(`${serviceURL}/`, body);
		} catch (errors) {
			console.log('error:' + errors);
		}
	},

	/**
	 * Update task content
	 * @param {Integer} taskId: task ID
	 * @param {Object} contents:
	 * @returns
	 */
	async update(taskId, contents) {
		try {
			return await ApiService.patch(`${serviceURL}/${taskId}`, contents);
		} catch (errors) {
			console.log('error:' + errors);
		}
	},

	/**
	 * Delete task record
	 * @returns {Object} Success message
	 */
	async delete(taskId) {
		try {
			return await ApiService.delete(`${serviceURL}/${taskId}`);
		} catch (errors) {
			console.log('error:' + errors);
		}
	},
};

export default TaskService;
