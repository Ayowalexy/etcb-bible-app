import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const Corithians_2_Introduction = () => (
    <View>
        <Text>The Second Epistle || Iggeret Of Paul  </Text>
        <Text>To The Community || Kehillah Of The Messiah In Corinth And Achaia</Text>
        <Text style={styles.paragraph}>
        The Book of 2 Corinthians also known as The Second Epistle or Iggeret to the Corinthians is the eight book of the New Testament. It was written by Apostle Paul to the Church or Community (Kehillah) of The Messiah in Corinth around 57AD.           </Text>
        <Text style={styles.paragraph}>
        Paul wrote it to address the issues about fake apostles who spread false doctrines and heresy.  He also spoke about spiritual war and warfare weapons, which are not carnal. He also spoke of his vision of paradise.           </Text>
        

    </View>
)



const styles = StyleSheet.create({
   paragraph: {
       paddingLeft: 20
   }
})

export default Corithians_2_Introduction