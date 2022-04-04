import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const EphesiansIntroduction = () => (
    <View>
        <Text>The Epistle || Iggeret Of Paul  </Text>
        <Text>To The Community || Kehillah Of The Messiah In Ephesus</Text>
        <Text style={styles.paragraph}>
        The Book of Ephesians also known as The Epistle or Iggeret to the Ephesians is the tenth book of the New Testament. It was written by Apostle Paul to the Church or Community (Kehillah) of The Messiah in Ephesus between 60AD to 62AD.            </Text>
               <Text style={styles.paragraph}>
               Paul wrote this to the believers in Ephesus, while he was in prison in Rome. The Emphasis is that Salvation is by grace through faith in Yeshua The Messiah. It is not by works and no one can boast of doing it by their own good work. They are to walk in unity and remain true to their calling.                  </Text>
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

export default EphesiansIntroduction