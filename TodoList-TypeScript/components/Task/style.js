import { StyleSheet } from 'react-native';

import color from '../../constants/color';
import constants from '../../constants/const';

const styles = StyleSheet.create({
	taskContainer: {
		alignItems: 'center',
	},
	task: {
		// height: constants.ITEM_HEIGHT,
		flexDirection: 'row',
		backgroundColor: color.backgroundItem,
		marginHorizontal: 18,
		marginVertical: 6,
		paddingVertical: 8,
		paddingHorizontal: 14,
		borderRadius: 8,
		alignItems: 'center',
		zIndex: 1,
		// Shadow for iOS
		shadowOpacity: 0.15,
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowRadius: 5,
		__title: {
			width: 46,
			height: 34,
			backgroundColor: color.secondary,
			borderRadius: 6,
			justifyContent: 'center',
			alignItems: 'center',
			evev: {
				backgroundColor: color.secondary,
			},
			odd: {
				backgroundColor: color.itemOdd,
			},
		},
		__titleText: {
			fontSize: 14,
			color: color.white,
			fontWeight: 'bold',
		},
		__content: {
			marginHorizontal: 12,
			fontSize: 18,
			color: color.textGray,
		},
	},

	iconContainer: {
		height: constants.ITEM_HEIGHT,
		flexDirection: 'row',
		position: 'absolute',
		right: 18,
		top: 6,
		// justifyContent: 'center',
		// alignItems: 'center',
		borderTopRightRadius: 8,
		borderBottomRightRadius: 8,
		overflow: 'hidden',

		icon: {
			height: constants.ITEM_HEIGHT,
			width: constants.ITEM_HEIGHT * 1.4,
			justifyContent: 'center',
			alignItems: 'center',
			// Shadow for iOS
			shadowOpacity: 0.15,
			shadowOffset: {
				width: 5,
				height: 5,
			},
			shadowRadius: 5,
			edit: {
				backgroundColor: color.blue,
			},
			delete: {
				backgroundColor: color.primary,
			},
		},
	},
});

export default styles;
