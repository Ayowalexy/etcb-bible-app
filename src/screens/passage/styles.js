import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets/Colors';

export const styles = StyleSheet.create({
    CONTAINER: {
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
    },
    NUMBER: {
        color: 'red', 
        fontWeight: 'bold',
        // marginRight: 5,
    },
    HEADER_1: {
        fontWeight: 'bold', 
        fontSize: 14,
        textAlign: 'center',
        color: Colors.DEFAULT, 
        marginBottom: 5
    },
    MSG: {
        fontWeight: 'bold',
        textAlign: "center", 
        fontSize: 14, 
        padding: 10, 
        marginBottom: 5
    }, TEXT_BOX: {
        display: 'flex', 
        justifyContent:'center', 
        alignItems: 'center', 
        width: '99%', 
        // marginTop: 20,   
        marginBottom: 0
    },
    REF: {
        fontStyle: 'italic', 
        fontSize: 13, 
        marginRight: 10, 
        textDecorationLine: 'underline',
        textDecorationColor: 'red'
    },
    COMMENT: {
        fontStyle: 'italic', 
        fontSize: 13, 
        marginTop: 10
    },
    ANIMATED: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: Dimensions.get('window').height - 150
    }
})