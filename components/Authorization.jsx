import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as React from 'react';

const AutorizatonView = styled.View`
    background-color: #E2F1FA;
    height: 100%;
`;

const Title = styled.Text`
    margin-top: 34px;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
`;

const Mail = styled.TextInput`
	margin-top: 54px;
    padding-left: 20px;
    width: 321px;
    height: 60px;
    
    justify-content: center;

    background: #FFFFFF;
    border: 0.5px solid #626262;
    border-radius: 10px;
`;

const Password = styled.TextInput`
    margin-top: 54px;
    padding-left: 20px;
    width: 321px;
    height: 60px;

    justify-content: center;

    background: #FFFFFF;
    border: 0.5px solid #626262;
    border-radius: 10px;
`;

const SignText = styled.Text `
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

const ViewButton = styled.Pressable`
    margin-top: 19px;
    width: 309px;
    height: 57px;

    justify-content: center;
    align-items: center;   
    /* background: linear-gradient(270deg, #EFAFDA 0%, #EFAFDA 0.01%, #00ADEA 47.92%, #00A7A0 100%); */
    background-color: #00A19A;
    border-radius: 35px;
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

export const Autorizaton = () => {
    return (
    <AutorizatonView> 
        <BackGroundView source={require('../assets/back.png')}>
        <AutorizationDetails>
            <Title>Авторизация</Title>

            <Mail>
                <SignText>Электронная почта</SignText>
            </Mail>
            
            <Password>
                <SignText>Пароль</SignText>
            </Password>

            <TextLine>Забыли пароль?</TextLine>
            
            {/* <LinearGradient colors={['#EFAFDA', '#00ADEA', '#00A7A0']}> */}
                <ViewButton>
                    <ButtonText>Войти</ButtonText>
                </ViewButton>
            {/* </LinearGradient> */}
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
    </AutorizatonView>
);
}

const styles = StyleSheet.create({
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
});
