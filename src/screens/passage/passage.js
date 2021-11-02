import { StyleSheet, StatusBar } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // paddingTop: StatusBar.currentHeight,
       
    },
    container_second: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -30,
    },
    linearGradient: {
        flex: 1,
        height: 50,
        padding: 30,

    },
    text_propmt: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: -10,
        paddingTop: 10
    },
    bible_book: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    hebrewName: {
        color: 'white',
        textAlign: 'center',
        marginTop: -5,
        fontStyle: 'italic'
    },
    menu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 50,
        marginTop: 5,
        backgroundColor: 'white',
        borderColor: '#171C24',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
        borderRadius: 40,
        width: 200,
        height: 40,
        flexGrow: 1

    },
    font_settings: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    chapter_number: {
        fontWeight: 'bold',
        // fontSize: 18,
        color: 'red',
        marginRight: 10
    },
    chapter_verse: {
        // fontSize: 17,
        paddingRight: 25,
    }, direction_folder: {
        position: 'absolute', 
        bottom: 0, 
        alignSelf: 'flex-end', 
        paddingRight: 20, 
        paddingBottom: 20
    }
    , direction: {
        width: 120, 
        height: 50, 
        backgroundColor: 'red', 
        borderRadius: 50, 
        flex:1, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center'}
})

export default styles