import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#CFD2CF',
		paddingVertical: 40,
		paddingHorizontal: 18,
	},
	body: {
		height: '100%',
		__title: {
			fontSize: 24,
			color: '#EB1D36',
			fontWeight: 'bold',
		},
		__list: {
			height: '100%',
			marginVertical: 20,
		},
	},

	input: {
		flex: 1,
	},
});

export default styles;
