import React from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { StyleSheet, View, Text } from 'react-native';

const Content = styled.View`
	margin-top: 50px;
	padding: 10px;
`;

const Navigate = styled.View`
	flex-direction: row;
	/* margin-top: 20px; */
	width: 100%;
	height: 20%;

	justify-content: space-around;
	background-color: #63C0B9;
	border-radius: 35px;
`;

const NavImage = styled.View`
	flex-direction: row;
	width: 46px;
	height: 46px;
	/* color: red; */
	background-color: white;
`;

export const Map = () => {
  	return (
		<View style={styles.container}>
			<Text style={styles.header}>Куда поехать?</Text>
			<Text style={styles.p}>Варианты размещения</Text>
			<Content>
      			<MapView style={styles.map} />
			</Content>
			<Navigate>
				{/* <NavImage source={require('../assets/news.svg')}/>
				<NavImage source={require('../assets/learn.svg')}/>
				<NavImage source={require('../assets/map.svg')}/>
				<NavImage source={require('../assets/calendar.svg')}/>
				<NavImage source={require('../assets/user.svg')}/> */}
			</Navigate>
		</View>
  	);
}

const styles = StyleSheet.create({
  	map: {
    	width: '100%',
    	height: '100%',
  	},
	container: {
		paddingTop: 23,
    	width: '100%',
    	height: '90%',
		position: 'relative',
	},
	header: {
		paddingLeft: 24,
		fontWeight: "600",
		fontSize: 24,
		lineHeight: 29,

		color: '#000000',
	},
	p: {
		paddingLeft: 24,
		fontWeight: "600",
		fontSize: 14,
		lineHeight: 29,

		color: '#000000',
	},
});