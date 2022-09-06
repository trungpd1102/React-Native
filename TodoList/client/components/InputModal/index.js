import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';

import styles from './style';

const App = (props) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [editingTask, setEditingTask] = useState({});

	const showModal = (task) => {
		setEditingTask(task);
		setModalVisible(true);
	};

	props.inputModalRef.current = {
		showModal: showModal,
	};

	const onPressOK = () => {
		props.handeEditTask(editingTask);
		setModalVisible(!modalVisible);
	};

	const onPressCancel = () => {
		setModalVisible(!modalVisible);
	};

	return (
		<View style={styles.centeredView}>
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Edit your task</Text>

						<TextInput
							multiline={true}
							style={styles.input}
							value={editingTask.task}
							onChangeText={(text) => setEditingTask({ ...editingTask, task: text })}
						/>
						<View style={styles.modalButtonGroup}>
							<Pressable style={[styles.button, styles.buttonYes]} onPress={onPressOK}>
								<Text style={styles.textStyle}>OK</Text>
							</Pressable>
							<Pressable style={[styles.button, styles.buttonCancel]} onPress={onPressCancel}>
								<Text style={styles.textStyle}>Cancel</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default App;
