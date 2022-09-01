import { Text, View, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';

import Task from './components/Task';
import Form from './components/Form';

import styles from './App.components.style';

export default function App() {
	const [tasks, setTasks] = useState([]);

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
							/>
						);
					})}
				</ScrollView>
			</View>
			<Form style={styles.input} handleAddTask={handleAddTask} />
		</View>
	);
}
