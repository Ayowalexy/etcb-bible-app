import { StyleSheet, Platform } from 'react-native';
import { Colors } from '../../assets/Colors';

const styles = StyleSheet.create({
  NEW_CONTAINER: {
    paddingLeft: 60,
    paddingRight: 60,
    width: "100%",
    display: "flex",
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginTop: 80
},
DAILY_VERSE_PARENT: {
  width: "100%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
},
DAILY_VERSE : {
  width: "90%",
  height: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
  ,
    BOX: {
      width: 100,
      height: 100,
      backgroundColor: "rgba(72,54,54, 0.20)",
      borderRadius: 20,
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 40,
      alignItems: 'center',
      borderWidth: 3,
      borderColor: '#E39121'
  },
  INNER_BOX: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: Colors.SECONDARY,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
},
TEXT: {
  
    paddingTop: 5,
    color: '#5c5b5b'
},
PREVIEW_PARENT: {
  width: "100%",
  height: 80,
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
},
PARENT: {
  width: "70%",
  height: 80,
  backgroundColor: Colors.SECONDARY,
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20, 
  borderWidth: 3,
  borderColor: '#E39121'

},
PREVIEW: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    textAlign:'center'
},
    container: {
      flex: 1,
      //justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'center',
      // backgroundColor: '#171C24',
      backgroundColor: '#fff',
      //alignItems: 'center'
    },
    box: {
      marginLeft: Platform.OS === 'ios' ? 50 : 40,
      marginRight:  Platform.OS === 'ios' ? 40 : 10,
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