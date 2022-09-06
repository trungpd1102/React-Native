import { Text, View, ScrollView, Alert } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

import Task from './components/Task';
import Form from './components/Form';
import InputModal from './components/InputModal';
import TaskService from './services/API/task.service';

import styles from './App.style';

export default function App() {
	const [tasks, setTasks] = useState([]);
	const [editingTask, setEditingTask] = useState({
		task: '',
		index: null,
	});
	const inputModalRef = useRef(null);
	useEffect(() => {
		getAllTasks();
	}, []);

	const getAllTasks = async () => {
		const { data, status } = await TaskService.getAll();
		if (status !== 200) return;

		await setTasks(data.docContent);
	};

	const handleAddTask = async (taskContent) => {
		let params = {
			task: taskContent,
		};
		const { data, status } = await TaskService.post(params);
		if (status !== 200) return;

		setTasks([...tasks, data.docContent]);
	};
	const handleDeleteTask = (task, index) => {
		Alert.alert('Delete Task', 'Are you sure want to delete?', [
			{
				text: 'OK',
				onPress: async () => {
					const { status } = await TaskService.delete(task.id);
					if (status !== 200) return;

					let tasksTmp = [...tasks];
					tasksTmp.splice(index, 1);
					setTasks(tasksTmp);
				},
			},
			{
				text: 'Cancel',
				onPress: () => {},
			},
		]);
	};

	const showModal = (task) => {
		setEditingTask(task);
		inputModalRef.current.showModal(task);
	};

	const handeEditTask = async (task) => {
		let params = {
			task: task.task,
		};
		const { data, status } = await TaskService.update(task.id, params);
		if (status !== 200) return;

		let tmpTask = [...tasks];
		let editingTaskIndex = findTaskIndex(tmpTask, data.docContent.id);
		if (editingTaskIndex >= 0) {
			tmpTask[editingTaskIndex] = data.docContent;
			setTasks(tmpTask);
		} else console.log('Task not found: ' + data.docContent);
	};

	/**
	 * Find task index of given tasks
	 * @param {Array} tasks List of tasks
	 * @param {*} taskId updated task id
	 * @returns Index of task in tasks list
	 */
	const findTaskIndex = (tasks, taskId) => tasks.findIndex((task) => task.id === taskId);

	return (
		<View style={styles.container}>
			<View style={styles.body}>
				<Text style={styles.body.__title}>Todo List</Text>
				<ScrollView style={styles.body.__list}>
					{tasks.map((task, index) => {
						return (
							<Task
								key={index}
								task={task}
								number={index + 1}
								handleDeleteTask={() => handleDeleteTask(task, index)}
								showModal={() => showModal(task)}
							/>
						);
					})}
				</ScrollView>
			</View>
			<Form style={styles.input} handleAddTask={handleAddTask} />
			<InputModal inputModalRef={inputModalRef} handeEditTask={handeEditTask}></InputModal>
		</View>
	);
}
