import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Keyboard,
} from 'react-native';
import React, { useState } from 'react';

import styles from './style';

const Form = (props) => {
	const [task, setTask] = useState('');

	const onAddTask = (e) => {
		if (task.length === 0) {
			alert('Please enter a task');
			return;
		}

		props.handleAddTask(task);
		setTask('');
		Keyboard.dismiss();
	};
	const onChange = (text) => {
		setTask(text);
	};

	return (
		<KeyboardAvoidingView
			style={styles.addTask}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<TextInput
				value={task}
				style={styles.addTask.__input}
				placeholder="Your task"
				onChangeText={onChange}
			/>
			<TouchableOpacity onPress={onAddTask}>
				<View style={styles.addTask.__iconWrapper}>
					<Text style={styles.icon}>+</Text>
				</View>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

export default Form;
