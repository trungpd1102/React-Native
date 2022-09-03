import { StyleSheet } from 'react-native';

import color from '../../constants/color';

const styles = StyleSheet.create({
	addTask: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 18,
		__input: {
			height: 44,
			width: '80%',
			backgroundColor: 'white',
			borderWidth: 1,
			borderColor: color.primary,
			borderRadius: '50%',
			paddingHorizontal: 18,
		},
		__iconWrapper: {
			width: 40,
			height: 40,
			backgroundColor: color.primary,
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: '100%',
		},
	},

	icon: {
		color: 'white',
		fontSize: 20,
		lineHeight: 21,
		fontWeight: '700',
	},
});

export default styles;
