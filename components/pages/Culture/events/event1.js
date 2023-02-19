import styled from 'styled-components/native';
import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Modal, Content } from 'react-native';
import * as React from 'react';
import { Alert } from 'react-native';

const AutorizatonView = styled.View`
    width: 100%;
    height: 239px;
    margin: 0 auto;

    margin-top: 32px;
    align-items: center;
`;

const LogoImage = styled.Image`
    width: 100%;
    height: 205px;
`;

const ButtonText = styled.Text`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #FFFFFF;
`;

const TextLine = styled.Text`
    font-weight: 400;
    font-size: 12px;
    padding-right: 15%;
    color: #3B6C82;
`;

const AutorizationDetails = styled.View`
    width: 100%;
    height: auto;
    padding-top: 10px;
    padding-left: 12px;
    align-items: center;
`;


const Title = styled.View`
    align-items: center;
    justify-content: center;
    height: 72px;
    z-index: 1;
    border: 1px solid #A1A1A1;
`;

const Map = styled.View`
    flex-direction: row;
    width: 150px;
    justify-content: space-around;
`;

export default function Event1({ modalTitle, setModalTitle }) {

    return (

        <View style={{ width: '100%', height: '100%' }}>
            <Title>
                <Text style={styles.header}>{modalTitle}</Text>
            </Title>
            <LogoImage
                source={require('../../../../assets/News/University.png')}
            />
            <AutorizatonView>
                <Text style={{ fontWeight: "600", fontSize: 16, lineHeight: 19, textAlign: 'center', color: '#000349', marginBottom: 38, }}>В выставочном зале представлены научно-технические разработки Самарского университета, где можно ознакомиться с достижениями ракетно-космической, металлургической, химической, энергетической, авиационной, и других областей.</Text>
                <Text style={{ fontWeight: "600", fontSize: 16, lineHeight: 19, textAlign: 'center', color: '#000349', marginBottom: 20, }}>До 01.08.2022 - 01.12.2023</Text>
                <Text style={{ fontWeight: "600", fontSize: 16, lineHeight: 19, textAlign: 'center', color: '#000349', marginBottom: 20, }}>Стоимость: 0 ₽</Text>

                <Map>
                    <Image source={require('../../../../assets/2Gis.png')}/>
                    <Image source={require('../../../../assets/yandex.png')}/>
                </Map>
                <Text style={{ fontWeight: "600", fontSize: 16, lineHeight: 19, textAlign: 'center', color: '#000349', marginBottom: 20, }}>Маршрут</Text>

                <TouchableOpacity style={styles.button} onPress={() => setModalTitle('Оставить заявку')}>
                    <ButtonText style={{ fontWeight: "600" }}>Оставить заявку</ButtonText>
                </TouchableOpacity>


                <Text styles={{ fontWeight: "600", fontSize: 16, lineHeight: 19, textAlign: 'center', color: '#000349', marginTop: 100, }}>Где остановиться?</Text>

                <Text styles={{ fontWeight: "600", fontSize: 16, lineHeight: 19, textAlign: 'center', color: '#000349' }}>Где поесть?</Text>
            </AutorizatonView>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 24,
        paddingLeft: 25,
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

        marginTop: 13,
        textAlign: 'center',
        color: '#76767C',
    },
    button: {
      marginTop: 19,
      width: 309,
      height: 57,
  
      justifyContent: 'center',
      alignItems: 'center',   
      backgroundColor: '#00ADEA',
      borderRadius: 35,
      marginBottom:23,
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

