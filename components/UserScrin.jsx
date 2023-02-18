import styled from 'styled-components/native';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

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
    padding-left: 31px;
`;

export const QuikInfo = () => {
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
            <ScrollView style={{marginTop: 30, height: 30}} horizontal={true}>
                <Text style={styles.filters}>Избранное</Text>
                <Text style={styles.filters}>Культура</Text>
                <Text style={styles.filters}>Наука</Text>
                <Text style={styles.filters}>Профориентация</Text>
            </ScrollView>
        </Info>
        <Applications>
            <Text style={styles.p}>Заявки</Text>
            
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
});
