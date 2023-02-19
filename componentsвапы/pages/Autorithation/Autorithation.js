import * as React from 'react';
// import styled from 'styled-components/native';

import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';

export default function AutorithationFileName({handleReset, handleLogin, username, password, setUsername, setPassword}) {

    return (
    
    <Modal animationType="fade" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Авторизация</Text>
              <TextInput
                style={styles.input}
                placeholder="Логин"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Войти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>)
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
    