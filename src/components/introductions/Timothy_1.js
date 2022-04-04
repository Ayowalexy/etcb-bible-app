import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const Timothy_1_Introduction = () => (
    <View>
        <Text>The First Epistle || Iggeret Of Paul </Text>
        <Text>To Timothy || Timoti </Text>
        <Text style={styles.paragraph}>
        The Book of 1 Timothy also known as The First Epistle or Iggeret to Timothy is the fifteenth book of the New Testament. It was written by Apostle Paul to Timothy around 62AD. 
                   </Text>
               <Text style={styles.paragraph}>
               Apostle Paul addressed Timothy as his true son in the faith. Timothy had a Hebrew mother and a Greek father. They lived in Lystra, where Paul was stoned to death and dragged out of the city. The brethren prayed for him and he came back to life. 
                                 </Text>
               <Text style={styles.paragraph}>
               Paul had also circumcised Timothy because of the work he and Paul would be doing among the Jews.                                 </Text>
               
    </View>
)



const styles = StyleSheet.create({
   paragraph: {
       paddingLeft: 20
   }
})

export default Timothy_1_Introduction