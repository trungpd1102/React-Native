import { StyleSheet } from 'react-native';
import color from '../../constants/color';

const styles = StyleSheet.create({
	centeredView: {
		top: '50%',
		transform: [{ translateY: -200 }],
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 15,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	modalButtonGroup: {
		flexDirection: 'row',
		columnGap: 20,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		flex: 1,
		margin: 10,
	},
	buttonCancel: {
		backgroundColor: color.blue,
	},
	buttonYes: {
		backgroundColor: color.primary,
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
	input: {
		minHeight: 30,
		width: '90%',
		fontSize: 16,
		backgroundColor: 'white',
		borderWidth: 1,
		borderTopColor: 'transparent',
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		borderColor: 'red',
		padding: 8,
		outlineStyle: 'none',
	},
});

export default styles;
