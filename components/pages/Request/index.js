import styled from 'styled-components/native';
import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Modal, Content } from 'react-native';
import * as React from 'react';
import { Alert } from 'react-native';

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

export default function Request({ modalTitle, setModalTitle }) {

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <Title>
                <Text style={styles.header}>Места размещения</Text>
            </Title>
            <ScrollView>

                <AutorizatonView>
                    <AutorizationDetails>
                        <TouchableOpacity style={styles.button} onPress={() => setModalTitle('Общежитие № 2 Самарского университета')}>
                            <TextLine>Общежитие № 2 Самарского университета</TextLine>
                        </TouchableOpacity>
                        <Text style={{ fontWeight: "600", fontSize: 16, lineHeight: 19, color: '#969696', marginTop: 90, }}>Самарская область</Text>
                        <Text style={styles.p}>ул. Ленинградская, 29</Text>
                    </AutorizationDetails>
                    <LogoImage
                        source={require('../../../assets/News/Dormitory.png')}
                    />
                </AutorizatonView>
                
                <AutorizatonView>
                    <AutorizationDetails>
                        <TouchableOpacity style={styles.button} onPress={() => setModalTitle('Общежитие № 2 Самарского университета')}>
                            <TextLine>Общежитие № 2 Самарского университета</TextLine>
                        </TouchableOpacity>
                        <Text style={{ fontWeight: "600", fontSize: 16, lineHeight: 19, color: '#969696', marginTop: 90, }}>Самарская область</Text>
                        <Text style={styles.p}>ул. Ленинградская, 29</Text>
                    </AutorizationDetails>
                    <LogoImage
                        source={require('../../../assets/News/Dormitory.png')}
                    />
                </AutorizatonView>
                <AutorizatonView>
                    <AutorizationDetails>
                        <TouchableOpacity style={styles.button} onPress={() => setModalTitle('Общежитие № 2 Самарского университета')}>
                            <TextLine>Общежитие № 2 Самарского университета</TextLine>
                        </TouchableOpacity>
                        <Text style={{ fontWeight: "600", fontSize: 16, lineHeight: 19, color: '#969696', marginTop: 90, }}>Самарская область</Text>
                        <Text style={styles.p}>ул. Ленинградская, 29</Text>
                    </AutorizationDetails>
                    <LogoImage
                        source={require('../../../assets/News/Dormitory.png')}
                    />
                </AutorizatonView>
                <AutorizatonView>
                    <AutorizationDetails>
                        <TouchableOpacity style={styles.button} onPress={() => setModalTitle('Общежитие № 2 Самарского университета')}>
                            <TextLine>Общежитие № 2 Самарского университета</TextLine>
                        </TouchableOpacity>
                        <Text style={{ fontWeight: "600", fontSize: 16, lineHeight: 19, color: '#969696', marginTop: 90, }}>Самарская область</Text>
                        <Text style={styles.p}>ул. Ленинградская, 29</Text>
                    </AutorizationDetails>
                    <LogoImage
                        source={require('../../../assets/News/Dormitory.png')}
                    />
                </AutorizatonView>
                <AutorizatonView>
                    <AutorizationDetails>
                        <TouchableOpacity style={styles.button} onPress={() => setModalTitle('Общежитие № 2 Самарского университета')}>
                            <TextLine>Общежитие № 2 Самарского университета</TextLine>
                        </TouchableOpacity>
                        <Text style={{ fontWeight: "600", fontSize: 16, lineHeight: 19, color: '#969696', marginTop: 90, }}>Самарская область</Text>
                        <Text style={styles.p}>ул. Ленинградская, 29</Text>
                    </AutorizationDetails>
                    <LogoImage
                        source={require('../../../assets/News/Dormitory.png')}
                    />
                </AutorizatonView>
                

            </ScrollView>
        </View>
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
