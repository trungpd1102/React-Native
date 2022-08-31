import { View, Text, TextInput } from 'react-native';
import React from 'react';

import styles from './style';

const index = () => {
	return (
		<View style={styles.addTask}>
			<TextInput style={styles.addTask.__input} placeholder="Your task" />
			<View style={styles.addTask.__iconWrapper}>
				<Text style={styles.icon}>+</Text>
			</View>
		</View>
	);
};

export default index;
