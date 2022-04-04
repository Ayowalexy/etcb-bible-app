import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const ColossiansIntroduction = () => (
    <View>
        <Text>The Epistle || Iggeret Of Paul </Text>
        <Text>To The Community || Kehillah Of The Messiah In Colossae </Text>
        <Text style={styles.paragraph}>
        The Book of Colossians also known as The Epistle or Iggeret to the Colossians is the twelfth book of the New Testament. It was written by Apostle Paul to the Church or Community (Kehillah) of The Messiah in Colossae near Laodicea between 58AD to 62AD.           </Text>
               <Text style={styles.paragraph}>
               Apostle Paul had not before been to the Colossian church. But he wanted to reach them, introduce himself and encourage them in The LORD. He also warned them against false teachers and heresies. He encouraged them to hold firmly to God and put their faith in Yeshua The Messiah who is first in all things.                 </Text>
               
    </View>
)



const styles = StyleSheet.create({
   paragraph: {
       paddingLeft: 20
   }
})

export default ColossiansIntroduction