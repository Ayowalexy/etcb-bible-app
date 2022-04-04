import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const Thessalonian_1_Introduction = () => (
    <View>
        <Text>The First Epistle || Iggeret Of Paul, Silvanus, and Timothy  </Text>
        <Text>To The Community || Kehillah Of The Messiah In Thessalonica.</Text>
        <Text style={styles.paragraph}>
        The Book of 1 Thessalonians also known as The First Epistle or Iggeret to the Thessalonians is the thirteenth book of the New Testament. It was written by Apostle Paul to the Church or Community (Kehillah) of The Messiah in Thessalonica between 51AD to52AD.           </Text>
               <Text style={styles.paragraph}>
               The Book of 1 Thessalonians is one of the oldest books in the New Testament.                  </Text>
               <Text style={styles.paragraph}>
               Apostle Paul also used the love of The Messiah for The Church to encourage the men to show same love to their wives.                 </Text>
               <Text style={styles.paragraph}>
               Apostle Paul encouraged all believers to put on the whole armor of God.                 </Text>
        
    </View>
)



const styles = StyleSheet.create({
   paragraph: {
       paddingLeft: 20
   }
})

export default Thessalonian_1_Introduction