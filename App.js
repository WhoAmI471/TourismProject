import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import { Autorizaton } from './components/Authorization';
import { Map } from './components/Map';
  

export default function App() {
	return (
		<View>
			<Map />
			{/* <Autorizaton/> */}
			<StatusBar theme="auto"/>
		</View>
	);
}