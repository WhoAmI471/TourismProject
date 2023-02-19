import styled from 'styled-components/native';

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
// import { Button } from 'react-native';
// import Svg, {
//   Use,
//   Image
// } from 'react-native-svg';
import Culture from './pages/Culture';
import Scienst from './pages/Scienst';
//
import Request from './pages/Request';
//
import Event1 from "./pages/Culture/events/event1";

import AutorithationFileName from './pages/Autorithation/Autorithation';

const Info = styled.View`
    padding-top: 48px;
    padding-left: 16px;
    padding-right: 16px;
`;

const Events =styled.View`
    margin: 0 auto;
    margin-top: 34px;
    padding-top: 28px;
    width: 100%;
    height: 290px;

    align-items: center;
    background-color: #DFF1FF;
    border-radius: 10px;
`;

const Content = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`;

const Event = styled.View`
    width: 156px;
    height: 189px;

    padding-top: 10px;
    padding-left: 15px;
    
    background: #FFFFFF;
    border-radius: 10px;
`;

const Applications = styled.View`
    margin-top: 10px;
    margin-left: 31px;
    margin-right: 31px;
    flex-direction: column;
`;

const Cards = styled.View`
  width: auto;
  height: 100%;

  margin-top: 14px;
  margin-left: 18px;
  margin-right: 18px;
  /* padding-left: 18px;
  padding-right: 18px; */
  display: flex;

  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const Card = styled.View`
  width: 131px;
  height: 126px;

  margin-top: 15px;
  align-items: center;
  background: #DFF1FF;
  border-radius: 10px;
`;

import { SvgXml } from 'react-native-svg';


export const QuikInfo = () => {
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -5 24 24" width="34" height="34">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="#000000" />
  </svg>`;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (title) => {
    setModalTitle(title);
    setModalVisible(true);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//log out выход, сбрасывает логин и пароль

const handleReset = () => {
    setUsername('');
    setPassword('');
   setModalTitle('Авторизация'); // После сброса показываем модальное окно
  };

const handleLogin = () => {
    // Здесь можно добавить логику для проверки логина и пароля
    setModalTitle(''); // Скрываем модальное окно после успешной 
    setModalVisible(false);
  };

// проверяет есть ли логин и пароль, если нет, показывает окно авторизации

useEffect(() => {
  if (username==='' ||password==='') { if(modalTitle !=='Авторизация' ) {
    setModalVisible(true);
    setModalTitle('Авторизация');
  }
}
}, []);
  

    return (
    <View>
        <Info>
            <Text style={styles.header}>Добрый день, Семён!</Text>
            <Text style={styles.headerDown}>18 февраля 16:31</Text>
            <Events>
                <Text style={styles.header}>Ближайщие события рядом</Text>
                <Content>
                    <Event>
                        <Text style={styles.p}>Презентация научных достижений Самарского университета</Text>
                    </Event>

                    <Event>
                        <Text style={styles.p}>Презентация научных достижений Самарского университета</Text>
                    </Event>
                </Content>
            </Events>

            <View style={styles.container}>
              <ScrollView style={{marginTop: 25, height: 40}} horizontal={true}>

                <TouchableOpacity style={styles.button} onPress={() => openModal('Избранное')}>
                  <Text style={styles.filters}>Избранное</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => openModal('Культура')}>
                  <Text style={styles.filters}>Культура</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => openModal('Наука')}>
                  <Text style={styles.filters}>Наука</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => openModal('Профориентация')}>
                  <Text style={styles.filters}>Профориентация</Text>
                </TouchableOpacity>

              </ScrollView>
        <Modal visible={modalVisible} transparent style={{width: '100%', height: '100%'}}>

          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              {/* <Text style={styles.closeButtonText}>---</Text> */}
             <SvgXml xml={svgMarkup} />
              </TouchableOpacity>
              
              {/* <Image style={styles.closeButtonText} href={require('../assets/arrow.png')}/>
            </TouchableOpacity>*/}
            <Content>
              {modalTitle==='Культура' && <Culture modalTitle={modalTitle} setModalTitle={setModalTitle}/> }
              {modalTitle==='Профориентация' && <Scienst modalTitle={modalTitle} setModalTitle={setModalTitle}/> }
              {/* {modalTitle==='Наука' &&  <Text style={styles.filters}>Культура и разная фигня.
             тут можете писать что угодно, вставлять картинки и т.д</Text> }
              {modalTitle==='Избранное' &&  <Text style={styles.filters}>Культура и разная фигня.
             тут можете писать что угодно, вставлять картинки и т.д</Text> } */}
          {/*  EVENTS */}
              {modalTitle === 'Презентация научных достижений Самарского университета' && <Event1 modalTitle={modalTitle} setModalTitle={setModalTitle}/>}
              {/* REQUEST */}
               {modalTitle === 'Оставить заявку' && <Request modalTitle={modalTitle} setModalTitle={setModalTitle}/>}
               {modalTitle==='Авторизация' && <AutorithationFileName username={username} password={password} setUsername={setUsername} setPassword={setPassword} handleLogin={handleLogin}/>}            
               </Content>
          </View>
        </Modal>
    </View>
        </Info>
          <Applications>
            <Text style={styles.p}>Заявки</Text>
            <Cards>
              <Card>
                <Text>Конференц -перевод</Text>
              </Card>
              <Card style={{ }}>
                <Text>Конференц -перевод</Text>
              </Card>
              <Card>
                <Text></Text>
              </Card>
              <Card>
                <Text></Text>
              </Card>
            </Cards>
            {/* <Cards>
            </Cards> */}
          </Applications>
    </View>

    );
}

const styles = StyleSheet.create({
    header:{
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 24,
        // marginTop: 48,
        // marginLeft: 16,
        
        color: '#000349',
    },
    headerDown:{
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 24,
        
        color: '#969696',
        marginTop: 7,
    },
    p:{
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 19,
        
        color: '#000349',
    },
    filters:{
        pl: '5px',
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 19,
        marginRight: 30,
        
        color: '#000349',
    },  
    map: {
        width: '100%',
        height: '100%',
    },
    gos: {
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        color: '#00A19A',
    },
    gosBlue: {
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        color: '#0065B1',
    },
    gosRed: {
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        color: '#EE3F58',
    },
    container: {
      display: 'flex',
      // flexDirrecttion: 'row',
      //flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
    },
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    modalContent: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      overflow: 'hidden',
    },
    closeButton: {
      position: 'absolute',
      top: 0,
      left: 0,
      padding: 10,
      zIndex: 100
    },
    closeButtonText: {
      color: '#3B52A3',
      marginTop: 13,
      zIndex: 2,
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 20,
      textAlign: 'center',
  },
});
