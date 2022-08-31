import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './style';

const Task = () => {
	return (
		<TouchableOpacity>
			<View style={styles.item}>
				<View style={styles.item.__title}>
					<Text style={styles.item.__titleText}>01</Text>
				</View>
				<Text style={styles.item.__content}>Learn React Native</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Task;
