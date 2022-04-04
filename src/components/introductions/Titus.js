import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const Titus_Introduction = () => (
    <View>
        <Text>The Epistle || Iggeret Of Paul To Titus || Titos </Text>
        <Text style={styles.paragraph}>
        The Book of Titus also known as The Epistle or Iggeret to Titus is the seventeenth book of the New Testament. It was written by Apostle Paul to Titus around 66AD. Apostle Paul wrote this to Titus while Titus was in Crete. 
                                   </Text>
               <Text style={styles.paragraph}>
               Titus was a convert of Paul and co-worker. Apostle Paul gave guidance to Titus on how to choose Church leaders.  He also warned him to be careful about the deception of people.
                                                               </Text>
               
    </View>
)



const styles = StyleSheet.create({
   paragraph: {
       paddingLeft: 20
   }
})

export default Titus_Introduction