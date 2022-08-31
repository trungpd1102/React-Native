import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Text style={styles.top.text}>Top Left</Text>
				<StatusBar style="auto" />
			</View>

			<View style={styles.center}>
				<View style={styles.center.centerCycle}>
					<Text style={styles.center.centerCycle.text}>Center</Text>
					<StatusBar style="auto" />
				</View>
			</View>

			<View style={styles.bottom}>
				<Text style={styles.bottom.text}>Bottom Right</Text>
				<StatusBar style="auto" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightblue',
		paddingVertical: 30,
		paddingHorizontal: 10,
	},
	top: {
		padding: 10,
		borderWidth: 1,
		borderColor: 'red',
		borderRadius: 2,
		backgroundColor: '#f2d4e3',
		// children style
		text: {
			color: '#0099ff',
			fontWeight: 'bold',
			fontSize: 20,
		},
	},
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		centerCycle: {
			backgroundColor: 'lightgreen',
			width: 140,
			height: 140,
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: '100%',
			// children style
			text: {
				color: '#0099ff',
				fontWeight: 'bold',
				fontSize: 20,
			},
		},
	},
	bottom: {
		alignItems: 'flex-end',
		padding: 10,
		borderRadius: 16,
    backgroundColor: '#419dd7',
    text: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
	},
});
