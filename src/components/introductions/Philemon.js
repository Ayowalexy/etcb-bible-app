import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const Philemon_Introduction = () => (
    <View>
        <Text>The Epistle || Iggeret Of Paul  And Timothy  </Text>
        <Text>To Philemon || Philimon </Text>
        <Text style={styles.paragraph}>
        The Book of Philemon also known as The Epistle or Iggeret to Philemon is the eighteenth book of the New Testament. It was written by Apostle Paul to Philemon around 60AD.  
                                           </Text>
               <Text style={styles.paragraph}>
               Philemon was a believer and a Church met regularly in his house.
                                                                              </Text>
               <Text style={styles.paragraph}>
               Paul wrote this letter to plead on behalf of Onesimus who was a slave of Philemon that ran away. Onesimus was in Rome, had become a convert and working for Paul  who was imprisoned at the time. Paul pleaded with Philemon to accept Onesimus back and forgive him of his crime.
                                                                                             </Text>
               
    </View>
)



const styles = StyleSheet.create({
   paragraph: {
       paddingLeft: 20
   }
})

export default Philemon_Introduction