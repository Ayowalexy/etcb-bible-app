import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#171C24', 
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    etb :{
        color: 'white', 
        fontSize: 35, 
        fontWeight: 'bold'
    },
    search : {
        backgroundColor: 'white', 
        width: 250, 
        height: 50, 
        borderRadius: 30, 
        padding: 10, 
        marginTop: 20,
        marginBottom: 50
    },
    range: {
        color: 'white', 
        fontSize: 18
    },
    range_query: {
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        width: 300
    },
    range_container: {
        backgroundColor: 'white', 
        height: 80, 
        width: 80, 
        borderRadius: 10, 
        marginRight: 20, 
        marginTop: 20,
       
    },
    range_text: {
        fontWeight: 'bold', 
        marginTop: 30, 
        marginLeft: 5
    }
})

export default styles