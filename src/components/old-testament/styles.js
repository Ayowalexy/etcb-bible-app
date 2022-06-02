import { StyleSheet } from "react-native";
import { Colors } from "../../assets/Colors";

export const styles = StyleSheet.create({
    VERSE: {
        width: 150,
        height: 50,
        marginBottom: 20,
        backgroundColor: Colors.SECONDARY_FADED,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#E39121'
    },
    VERSE_01: {
        fontWeight: 'bold',
        color: Colors.DEFAULT,
        textAlign: 'center'
    },
    VERSE_02: {
        fontSize: 12,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    PARENT: {
        width: '100%',
        display: "flex",
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})