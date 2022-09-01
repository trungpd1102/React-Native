import { StyleSheet } from 'react-native';
import color from './constants/color';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.background,
		paddingTop: 40,
		paddingBottom: 20,
	},
	body: {
		flex: 1,
		__title: {
			fontSize: 24,
			color: color.primary,
			fontWeight: 'bold',
			marginLeft: 20,
		},
		__list: {
			height: '100%',
			marginVertical: 20,
		},
	},

	input: {},
});

export default styles;
