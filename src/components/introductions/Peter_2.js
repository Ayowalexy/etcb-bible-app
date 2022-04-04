import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const Peter_1_Introduction = () => (
    <View>
        <Text>The Second Epistle || Iggeret Of Peter || Kefa </Text>
        <Text style={styles.paragraph}>
        The Book of 2 Peter or Kefa Bais also known as The Second Epistle or Iggeret of Peter is the twenty-second book of the New Testament. It is believed to have been written by Apostle Peter between 65AD – 68AD. It was his last Epistle before he was martyred, crucified upside down by Nero in Rome in 68AD.
                                                           </Text>
               <Text style={styles.paragraph}>
               In this second Epistle, Apostle Peter warned to watch out against false teachers, deceivers and their false doctrines in the churches. He also wrote about the certainty of the second coming of The Messiah and everyone should be ready.  He encouraged all believers to make sure of their election (approval) before God. 
        </Text>               
    </View>
)



const styles = StyleSheet.create({
   paragraph: {
       paddingLeft: 20
   }
})

export default Peter_1_Introduction