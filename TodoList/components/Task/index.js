import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './style';

const Task = (props) => {
	const { number } = props;
	const numberText = number < 10 ? `0${number}` : number;
	const itemBg = number % 2 === 0 ? styles.item.__title.odd : styles.item.__title.even;

	return (
		<TouchableOpacity onPress={props.handleDeleteTask}>
			<View style={styles.item}>
				<View style={[styles.item.__title, itemBg]}>
					<Text style={styles.item.__titleText}>{numberText}</Text>
				</View>
				<Text style={styles.item.__content}>{props.task}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Task;
