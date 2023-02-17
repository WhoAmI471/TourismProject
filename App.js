import {StatusBar, View, Text, Image} from 'react-native';
import { Autorizaton } from './components/Authorization';

export default function App() {
	return (
		<View>
			<Autorizaton/>
			<StatusBar theme="auto"/>
		</View>
	);
}

