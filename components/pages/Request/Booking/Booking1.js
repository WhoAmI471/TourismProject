import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Modal, Content } from 'react-native';
import * as React from 'react';
import { Alert } from 'react-native';
/*Верх получился чуть чуть кривой. Я хз как сделать перенос текста и там не смог все выровнять!*/

const Background = styled.View`
background-color:#FAFAFA;/*Цвет не как в макете!*/
`;
const HeaderMenu = styled.View`
height: 68px;
width: 100%;
`;

const HeaderText = styled.Text`
padding-top:17px;
padding-right:36px;
padding-left:35px;

font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #000349;
`;
/*-----------------------*/ 
const SecondBlock = styled.View`
height: 221px;
`;
const Img = styled.View`
width: 357px;
height: 204px;
margin-top:13px;
/* margin-right:18px; */
margin-left:20px;
`;
/*-----------------------*/ 
const FirdBlock = styled.View`
height: 59px;
flex-direction:row;
justify-content:space-between;
`;
const TextFirdBlock_1 = styled.Text`
padding-top:17px;
padding-right:26px;
padding-left:16px;
font-weight: 500;
font-size: 16px;
line-height: 19px;

color: #000349;
`;
const TextFirdBlock_2 = styled.Text`
margin-top:27px;
margin-right:26px;
font-weight: 500;
font-size: 16px;
line-height: 19px;

color: #969696;
`;
const TextFirdBlock_3 = styled.Text`
margin-top:23px;
margin-right:17px;
font-weight: 500;
font-size: 16px;
line-height: 19px;

color: #969696;
`;
/*-----------------------*/ 
const FourthBlock = styled.View`
height: 509px;
margin-top:21px;
margin-right:17px;
margin-left:16px;
margin-bottom:11px;
background-color: #FFFFFF;
border: 1px solid #DFF1FF;
border-top-right-radius:28px;
border-top-left-radius:29px;
/* background-color:black; */
`;

const FourthBlock_Button = styled.View`
margin-top:29px;
margin-right:43px;
margin-left:39px;

padding-top:20px;
padding-right:57px;
padding-bottom:19px;
padding-left:63px;
border-radius: 35px;

align-items:center;

background-color:turquoise;
`;
const FourthBlock_Text_Button = styled.Text`
font-weight: 600;
font-size: 20px;
line-height: 24px; 
color: #FFFFFF;
`;
/* в 1 и 5 поставил font-weight: 800; в место 600 */
const FourthBlock_Text_1 = styled.Text`
margin-top:25px;
margin-right:74px;
margin-left:23px;

font-weight: 800;
font-size: 24px;
line-height: 29px;
color: #000349;

`;
const FourthBlock_Text_2 = styled.Text`
margin-top:21px;
margin-right:39px;
margin-left:23px;

font-weight: 500;
font-size: 20px;
line-height: 24px;
color: #000349;
`;
const FourthBlock_Text_3 = styled.Text`
margin-top:25px;
margin-right:119px;
margin-left:23px;

font-weight: 500;
font-size: 20px;
line-height: 24px;
color: #000349;
`;
const FourthBlock_Text_4 = styled.Text`
margin-top:21px;
margin-right:47px;
margin-left:23px;

font-weight: 500;
font-size: 20px;
line-height: 24px;
color: #000349;
`;
const FourthBlock_Text_5 = styled.Text`
margin-top:13px;
margin-right:237px;
margin-left:23px;

font-weight: 800;
font-size: 24px;
line-height: 29px;
color: #000349;
`;
const FourthBlock_Review = styled.View`
height:108px;
width:310px;
margin-top:21px;
margin-right:22px;
margin-left:25px;
background-color:#DFF1FF;
border-radius: 10px;
`;


const ButtonText = styled.Text`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #FFFFFF;
`;

const AutorizatonView = styled.View`
    
    width: 357px;
    height: 203px;
    margin: 0 auto;

    margin-bottom: 42px;
    flex-direction: row;
    /* justify-content: space-between; */
    /* flex-wrap: wrap; */
    background: #FFFFFF;
    border: 1px solid #DEDEDE;
    border-radius: 10px;
`;

const LogoImage = styled.Image`
    width: 170px;
    height: 100%;
    margin-left: auto;
`;

const TextLine = styled.Text`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000349;
`;

const AutorizationDetails = styled.View`
    width: 60%;
    height: auto;
    /* padding-top: 10px; */
    margin-left: 15px;
    margin-top: 17px;
    align-items: flex-start;
`;

const Title = styled.View`
    align-items: center;
    justify-content: center;
    height: 72px;
    z-index: 1;
    border: 1px solid #A1A1A1;
    margin-bottom: 26px;
`;

export default function Booking1({ modalTitle, setModalTitle }) {
  return (
    <Background>
     <View>
      <Title>
          <Text style={styles.header}>{modalTitle}</Text>
      </Title>

      <SecondBlock>
      <Img> 
      <Image source={require('../../../../assets/Booking.png')}/>
      </Img>
      </SecondBlock>
      
      <FirdBlock>
          <TextFirdBlock_1>
            <Text >Общая информация</Text>
          </TextFirdBlock_1>
          <TextFirdBlock_2> 
            <Text>Комнаты</Text>
          </TextFirdBlock_2>
          <TextFirdBlock_3>
            <Text>Условия заселения</Text>
          </TextFirdBlock_3> 
      </FirdBlock>

      <FourthBlock>

        <FourthBlock_Button>

            <TouchableOpacity style={styles.button} onPress={() => setModalTitle('')}>
                <ButtonText style={{ fontWeight: "600" }}>Оставить заявку</ButtonText>
            </TouchableOpacity>
          </FourthBlock_Button>

          <FourthBlock_Text_1>
            <Text>г. Самара, Самарская область</Text>
          </FourthBlock_Text_1>

          <FourthBlock_Text_2>
            <Text>Адрес: ул. Ленинградская, 29</Text>
          </FourthBlock_Text_2>

          <FourthBlock_Text_3>
            <Text>Питание: Без питания</Text>
          </FourthBlock_Text_3>

          <FourthBlock_Text_4>
            <Text>Продолжительность пребывания: от 2 до 30 дней</Text>
          </FourthBlock_Text_4>

          <FourthBlock_Text_5>
            <Text>Отзывы</Text>
          </FourthBlock_Text_5>
        
        <FourthBlock_Review>

        </FourthBlock_Review>

      </FourthBlock>
      
      <StatusBar style="auto" />
    </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
      fontWeight: "600",
      fontSize: 20,
      lineHeight: 24,
      // marginTop: 48,
      // marginLeft: 16,

      color: '#000349',
  },
  headerDown: {
      fontWeight: "600",
      fontSize: 20,
      lineHeight: 24,

      color: '#969696',
      marginTop: 7,
  },
  p: {
      fontWeight: "600",
      fontSize: 16,
      lineHeight: 19,

      color: '#969696',
  },
  button: {
      height: "auto",
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
  },
  closeButtonText: {
      color: '#007AFF',
      fontSize: 20,
  },
  modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 20,
      textAlign: 'center',
  },
});