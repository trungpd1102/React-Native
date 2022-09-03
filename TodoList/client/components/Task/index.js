import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './style';
import constants from './../../constants/const';

const TRANSLATE_X_THESHODE = constants.ITEM_HEIGHT * 2.7;

const Task = (props) => {
	const { number, task } = props;
	const numberText = number < 10 ? `0${number}` : number;
	const itemBg = number % 2 === 0 ? styles.task.__title.odd : styles.task.__title.even;

	const translateX = useSharedValue(0);

	const panGesture = useAnimatedGestureHandler({
		onActive: (event) => {
			if (event.translationX < -TRANSLATE_X_THESHODE * 0.8) {
				translateX.value = -TRANSLATE_X_THESHODE;
				return;
			}

			translateX.value = event.translationX;
		},
		onEnd: () => {
			if (translateX.value === -TRANSLATE_X_THESHODE) {
				translateX.value = -TRANSLATE_X_THESHODE;
				return;
			}
			translateX.value = withTiming(0, {
				duration: 300,
			});
		},
	});

	const rStyle = useAnimatedStyle(() => ({
		transform: [
			{
				translateX: translateX.value,
			},
		],
	}));

	const onPressDelete = () => {
		props.handleDeleteTask();
		translateX.value = withTiming(0, {
			duration: 300,
		});
	};

	const onPressEdit = () => {
		props.showModal();
		translateX.value = withTiming(0, {
			duration: 300,
		});
	};

	return (
		<View styles={styles.taskContainer}>
			<PanGestureHandler onGestureEvent={panGesture}>
				<Animated.View style={[styles.task, , rStyle]}>
					<View style={[styles.task.__title, itemBg]}>
						<Text style={styles.task.__titleText}>{numberText}</Text>
					</View>
					<Text style={styles.task.__content}>{task}</Text>
				</Animated.View>
			</PanGestureHandler>

			<View style={styles.iconContainer}>
				<TouchableOpacity
					style={[styles.iconContainer.icon, styles.iconContainer.icon.edit]}
					onPress={onPressEdit}
				>
					<FontAwesome5
						name={'edit'}
						size={styles.iconContainer.height * 0.4}
						color={'white'}
					></FontAwesome5>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.iconContainer.icon, styles.iconContainer.icon.delete]}
					onPress={onPressDelete}
				>
					<FontAwesome5
						name={'trash-alt'}
						size={styles.iconContainer.height * 0.4}
						color={'white'}
					></FontAwesome5>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Task;
