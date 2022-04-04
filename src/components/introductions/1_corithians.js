import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const Corithians_1_Introduction = () => (
    <View>
        <Text>The First Epistle || Iggeret Of Paul </Text>
        <Text>To The Community || Kehillah Of The Messiah In Corinth</Text>
        <Text style={styles.paragraph}>
        The Book of 1 Corinthians also known as The First Epistle or Iggeret to the Corinthians is the seventh book of the New Testament. It was written by Apostle Paul to the Church or Community (Kehillah) of The Messiah in Corinth around 56AD.         </Text>
        <Text style={styles.paragraph}>
        Paul wrote it to address the issues the Church was facing. This included sexual immorality, use of spiritual gifts, various doctrines, divisions, actions and misunderstandings in the church.          </Text>
        

    </View>
)



const styles = StyleSheet.create({
   paragraph: {
       paddingLeft: 20
   }
})

export default Corithians_1_Introduction