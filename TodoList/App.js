import { Text, View, ScrollView } from 'react-native';

import Task from './components/Task';
import styles from './App.components.style';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.body}>
				<Text style={styles.body.__title}>Todo List</Text>
				<ScrollView style={styles.body.__list}>
					<Task />
					<Task />
					<Task />
					<Task />
					<Task />
					<Task />
					<Task />
					<Task />
					<Task />
					<Task />
					<Task />
					<Task />
				</ScrollView>
			</View>
			<View style={styles.input}></View>
		</View>
	);
}
