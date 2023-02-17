import styled from 'styled-components/native';
import * as React from 'react';

const AutorizatonView = styled.View`
    background-color: #E2F1FA;
    height: 100%;
`;

const LogoImage = styled.Image`
    margin-left: 20%;
    margin-top: 30px;
    width: 310px;
    height: 214px;
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
    color: #212121;
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
    height: 100%;
    margin-top: 19px;
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
    background-color: #00A19A;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
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

export const Autorizaton = () => {
    return (
    <AutorizatonView>
        <LogoImage
            source={{uri:'https://i.ibb.co/BBdpdJ4/logo.png'} }
        />
        <AutorizationDetails>
            <Title>Авторизация</Title>

            <Mail>
                <SignText>Электронная почта</SignText>
            </Mail>
            
            <Password>
                <SignText>Пароль</SignText>
            </Password>

            <TextLine>Забыли пароль?</TextLine>
            
            <ViewButton>
                <ButtonText>Войти</ButtonText>
            </ViewButton>

            <Info>
                <TextLine>Нажимая, вы соглашаетесь с правилами обработки данных</TextLine>
            </Info>

            <Registration>Регистрация для путешественников</Registration>
        </AutorizationDetails>
    </AutorizatonView>
);
}
