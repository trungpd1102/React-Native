import { Text, View, ScrollView, Alert } from 'react-native';
import React, { useState, useRef } from 'react';

import Task from './components/Task';
import Form from './components/Form';
import InputModal from './components/InputModal';

import styles from './App.style';

export default function App() {
	const [tasks, setTasks] = useState([]);
	const [editingTask, setEditingTask] = useState({
		task: '',
		index: null,
	});
	const inputModalRef = useRef(null);

	const handleAddTask = (task) => {
		setTasks([...tasks, task]);
	};
	const handleDeleteTask = (index) => {
		Alert.alert('Delete Task', 'Are you sure want to delete?', [
			{
				text: 'OK',
				onPress: () => {
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

	const showModal = (data) => {
		setEditingTask(data);
		inputModalRef.current.showModal(data);
	};

	const handeEditTask = (task) => {
		let tmpTask = [...tasks];
		tmpTask[editingTask.index] = task;
		setTasks(tmpTask);
	};

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
								handleDeleteTask={() => handleDeleteTask(index)}
								showModal={() => showModal({ index: index, task: task })}
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
