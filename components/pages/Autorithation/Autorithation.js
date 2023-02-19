import * as React from 'react';
import styled from 'styled-components/native';

import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';

const AutorizatonView = styled.View`
    background-color: #E2F1FA;
    width: 100%;
    height: 100%;
`;

const Title = styled.Text`
    margin-top: 34px;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
`;

const SignText = styled.TextInput `

    margin-top: 54px;
    padding-left: 20px;
    width: 321px;
    height: 60px;
    
    justify-content: center;

    background: #FFFFFF;
    border: 0.5px solid #626262;
    border-radius: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-left: 20px;
    color: #004D6D;
`;

const TextLine = styled.Text `
    margin-top: 18px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #989898;
`;

const AutorizationDetails = styled.View`
    width: 100%;
    height: 1000px;
    margin-top: 261px;
    align-items: center;
    border-radius: 43px;
    background-color: #FFFFFF;
`;

const ViewButtonGos = styled.Pressable`
    margin-top: 19px;
    width: 309px;
    height: 57px;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: #F6F6F6;
    border: 0.5px solid #004D6D;
    border-radius: 35px;
`;

const ButtonText = styled.Text`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;
`;

const Info = styled.View`
    margin-top: 12px;
    width: 282px;
    align-items: center;
`; 

const Registration = styled.Text `
    margin-top: 19px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #00B6D8;
`;

const BackGroundView = styled.ImageBackground`
    height: 100%;
    width: 100%;
`;


export default function AutorithationFileName({ handleReset, handleLogin, username, password, setUsername, setPassword }) {

  return (

    <AutorizatonView>
      
      <BackGroundView source={require('../../../assets/back.png')}>
      <AutorizationDetails>
        <Title>Авторизация</Title>

        <SignText
          placeholder="Электронная почта"
          value={username}
          onChangeText={setUsername}
        />

        <SignText
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <ButtonText>Войти</ButtonText>
        </TouchableOpacity>

        <ViewButtonGos>
          <ButtonText style={styles.gos}>Войти через </ButtonText>
            <ButtonText style={styles.gosBlue}>гос</ButtonText>
            <ButtonText style={styles.gosRed}>услуги</ButtonText>
        </ViewButtonGos>

        
        <Info>
          <TextLine>Нажимая, вы соглашаетесь с правилами обработки данных</TextLine>
        </Info>

        <Registration>Регистрация для путешественников</Registration>
      </AutorizationDetails>
      </BackGroundView>
    </AutorizatonView>)
}

const styles = StyleSheet.create({
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
  button: {
    marginTop: 19,
    width: 309,
    height: 57,

    justifyContent: 'center',
    alignItems: 'center',   
    backgroundColor: '#00ADEA',
    borderRadius: 35,
  },
});
