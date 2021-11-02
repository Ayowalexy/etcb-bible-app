import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'space-between',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'center',
      backgroundColor: '#171C24'
    },
    box: {
      marginLeft: 40,
      marginRight: 10,
      marginBottom: 30,
      width: 110,
      height: 110,
      borderRadius: 20,
      backgroundColor: 'white'
    },
    box_text :{
      fontSize: 20,
      color: 'black'
    },
    box_inner : {
      flex: 1, 
      justifyContent: 'space-around', 
      marginLeft: 10, 
     
    }
  });

  export default styles