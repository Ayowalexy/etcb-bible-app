import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const GalatiansIntroduction = () => (
    <View>
        <Text>The Epistle || Iggeret Of Paul </Text>
        <Text>To The Community || Kehillah Of The Messiah In Galatia</Text>
        <Text style={styles.paragraph}>
        The Book of Galatians also known as The Epistle or Iggeret to the Galatians is the ninth book of the New Testament. It was written by Apostle Paul to the Church or Community (Kehillah) of The Messiah in Galatia a between 56AD to 57AD.         </Text>
               <Text style={styles.paragraph}>
               Paul wrote this to the believers in Galatia. Through this Epistle, Paul chastised them for so quickly turning away from the gospel of Good News he had preached to them. Others were asking them to keep the Law or Torah. Paul re-emphasized to them that salvation is through faith in Yeshua The Messiah. It is not by the works of the Law or Torah.                  </Text>
        
    </View>
)



const styles = StyleSheet.create({
   paragraph: {
       paddingLeft: 20
   }
})

export default GalatiansIntroduction