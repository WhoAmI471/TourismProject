import styled from 'styled-components/native';
import { StyleSheet, View, Text } from 'react-native';

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

const Event = styled.View`
    
`;

export const QuikInfo = () => {
    return (
        <Info>
            <Text style={styles.header}>Добрый день, Семён!</Text>
            <Text style={styles.p}>18 февраля 16:31</Text>
            <Events>
                <Text style={styles.header }>Ближайщие события рядом</Text>
            
            </Events>
        </Info>
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
    p:{
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 24,
        
        color: '#969696',
        marginTop: 7,
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
});
