import { StyleSheet } from 'react-native';

import color from '../../constants/color';

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		backgroundColor: color.backgroundItem,
		marginVertical: 6,
		marginHorizontal: 18,
		paddingVertical: 8,
		paddingHorizontal: 14,
		borderRadius: 8,
		alignItems: 'center',

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
});

export default styles;
