import { StyleSheet } from "react-native";
import { Colors } from "../../assets/Colors";

export const styles = StyleSheet.create({
    CONTAINER: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
    ETB_BACKGROUND: {
        backgroundColor: Colors.SECONDARY_FADED,
        width: 150,
        height: 100,
        borderRadius: 20,
        marginTop: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ETB: {
        fontWeight: 'bold',
        fontSize: 40,
        color: Colors.SECONDARY
    },
    ETB_TEXT: {
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 15
    },
    DETAILS: {
        fontSize: 17,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    BOX: {
        height: 60,
          margin: 12,
          padding: 10,
          borderRadius: 10,
          backgroundColor: 'rgba(0,0,0,0.10)'
},
SIGN_UP: {                               
    backgroundColor: Colors.SECONDARY,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 40
},
error: {
    color: 'red',
    paddingLeft: 10
},
ICON: {
    position: 'absolute',
    top: 17,
    left: 270
}
})