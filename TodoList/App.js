import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.body}>
				<Text style={styles.body.__title}>Todo List</Text>
				<ScrollView style={styles.body.__list}>
					<TouchableOpacity>
						<View style={styles.item}>
							<View style={styles.item.__title}>
								<Text style={styles.item.__titleText}>01</Text>
							</View>
							<Text style={styles.item.__content}>Learn React Native</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={styles.item}>
							<View style={styles.item.__title}>
								<Text style={styles.item.__titleText}>01</Text>
							</View>
							<Text style={styles.item.__content}>Learn React Native</Text>
						</View>
					</TouchableOpacity>
				</ScrollView>

				{/* <View style={styles.item}>
						<View style={styles.item.__title}>
							<Text style={styles.item.__titleText}>02</Text>
						</View>
						<Text style={styles.item.__content}>Learn JavaScript</Text>
					</View>

					<View style={styles.item}>
						<View style={styles.item.__title}>
							<Text style={styles.item.__titleText}>03</Text>
						</View>
						<Text style={styles.item.__content}>Learn NodeJs</Text>
          </View> */}
			</View>
			<View style={styles.input}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#CFD2CF',
		paddingVertical: 30,
		paddingHorizontal: 18,
	},
	body: {
		flex: 1,
		__title: {
			fontSize: 24,
			color: '#EB1D36',
			fontWeight: 'bold',
		},
		__list: {
			marginVertical: 20,
			paddingVertical: 10,
		},
	},
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
	input: {
		flex: 1,
	},
});
