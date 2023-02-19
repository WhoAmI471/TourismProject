import styled from 'styled-components/native';
import * as React from 'react';
import { Alert } from 'react-native';

const AutorizatonView = styled.View`
    width: 88%;
    height: 239px;
    margin: 0 auto;

    margin-top: 14px;
    background: #FFFFFF;
    border: 1px solid #63C0B9;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;

const LogoImage = styled.Image`
    width: 100%;
    height: 60%;
    border-radius: 10px;
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

export default function Scienst({ modalTitle }) {
    // Alert.alert(url['url']);
    // var id = url['url'];
    return (
        <AutorizatonView>
            <AutorizationDetails>
                <TextLine>
                    {modalTitle}
                </TextLine>
            </AutorizationDetails>
            <LogoImage
                source={require('../../assets/News/image6.png')}
            />
        </AutorizatonView>
    );
}
