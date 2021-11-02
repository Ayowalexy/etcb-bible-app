import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#171C24'
    },
    user : {
        marginTop: 30, 
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        
    },
    name : {
        textTransform: 'uppercase', 
        color: 'white',
        fontSize: 25
    },
    image: {
        width: 150, 
        height: 150, 
        borderRadius: 100
    },
    camera: {
        // marginTop: 100, 
        // left: 120, 
        // position: 'absolute'
    },
    icons: {
        marginTop: 30,
        marginLeft: 10, 
        marginRight: 10, 
        marginBottom: 30,
        flex: 1, 
        backgroundColor: 'white', 
        paddingTop: 40, 
        paddingBottom: 40, 
        borderRadius: 20
    },
    icon_nested: {
        flex: 1, 
        flexDirection: 'row', 
        marginLeft: 10, 
        marginRight: 20, 
        paddingBottom: 20, 
        marginBottom: 30, 
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        // borderBottomStyle: 'solid'
    },
    text: {
        flex: 1, 
        marginLeft: 20, 
        marginRight: 10
    },
    text_nested: {
        fontWeight: 'bold', 
        fontSize: 20
    }
})

export default styles