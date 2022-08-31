import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		backgroundColor: '#F5EDDC',
		marginVertical: 5,
		paddingVertical: 8,
		paddingHorizontal: 14,
		borderRadius: 8,
		alignItems: 'center',
		__title: {
			width: 46,
			height: 34,
			backgroundColor: '#FA9494',
			borderRadius: 6,
			justifyContent: 'center',
			alignItems: 'center',
		},
		__titleText: {
			fontSize: 14,
			color: '#ffffff',
			fontWeight: 'bold',
		},
		__content: {
			marginHorizontal: 12,
			fontSize: 18,
			color: '#333',
		},
	},
});

export default styles;
