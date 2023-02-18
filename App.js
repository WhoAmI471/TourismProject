import React from 'react';
import {StatusBar, View, Image, ScrollView, StyleSheet} from 'react-native';
import { Autorizaton } from './components/Authorization';
import { Map } from './components/Map';
import {Post} from './components/NewsPost'
import styled from 'styled-components/native';

const HeaderMenu = styled.View`
	height: 75px;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	padding: 24px;
`;

const HeaderText = styled.Text`
	
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;

	color: #004D6D;
`;

const Filter = styled.Image`
	width: 29px;
	height: 22px;
`;

const Navigate = styled.View`
	flex-direction: row;
	width: 100%;
	height: 90px;

	justify-content: space-around;
	background-color: #28A8B9;
	border-radius: 35px;
`;

const NavImage = styled.View`
	flex-direction: row;
	width: 46px;
	height: 46px;
	/* color: red; */
	background-color: white;
`;

const Scroll = styled.ScrollView`
	height: 84%;
`;

export default function App() {
	
	return (
		<View>
			{/* <Map /> */}
			<Autorizaton/>
			<StatusBar theme="auto"/>
		</View>
	);
}

// export default function App() {
// 	return (
// 		<View>
// 			<HeaderMenu>
// 				<HeaderText>Новости</HeaderText>
// 				<Filter source={require('./assets/Filter.png')}/>
// 			</HeaderMenu>
// 			<Scroll>
// 				<Post 
// 					// url={'../assets/News/image6.png'}
// 					content={"Студенты технических специальностей из 4 регионов России пройдут программу практической подготовки на одном из ведущих предприятий российской космической отрасли"}
// 				/>
// 				<Post 
// 					// url={'../assets/News/image6.png'}
// 					content={"Студенты технических специальностей из 4 регионов России пройдут программу практической подготовки на одном из ведущих предприятий российской космической отрасли"}
// 				/>
// 				<Post 
// 					// url={'../assets/News/image6.png'}
// 					content={"Студенты технических специальностей из 4 регионов России пройдут программу практической подготовки на одном из ведущих предприятий российской космической отрасли"}
// 				/>
// 				<Post 
// 					// url={'../assets/News/image6.png'}
// 					content={"Студенты технических специальностей из 4 регионов России пройдут программу практической подготовки на одном из ведущих предприятий российской космической отрасли"}
// 				/>
// 				<Post 
// 					// url={'../assets/News/image6.png'}
// 					content={"Студенты технических специальностей из 4 регионов России пройдут программу практической подготовки на одном из ведущих предприятий российской космической отрасли"}
// 				/>
// 				<Post 
// 					// url={'../assets/News/image6.png'}
// 					content={"Студенты технических специальностей из 4 регионов России пройдут программу практической подготовки на одном из ведущих предприятий российской космической отрасли"}
// 				/>
// 			{/* <Map /> */}
// 			{/* <Autorizaton/> */}
// 			</Scroll>

// 			<Navigate>
// 				<NavImage source={require('./assets/news.svg')}/>
// 				<NavImage source={require('./assets/learn.svg')}/>
// 				<NavImage source={require('./assets/map.svg')}/>
// 				<NavImage source={require('./assets/calendar.svg')}/>
// 				<NavImage source={require('./assets/user.svg')}/>
// 			</Navigate>

// 			<StatusBar theme="auto"/>
// 		</View>
// 	);
// }