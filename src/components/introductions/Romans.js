import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const RomansIntroduction = () => (
    <View>
        <Text>The Epistle || Iggeret Of Paul         </Text>
        <Text>To The Community || Kehillah Of The Messiah In Rome</Text>
        <Text style={styles.paragraph}>
        The Book of Romans also known as The Epistle or Iggeret to the Romans is the sixth book of the New Testament. It was written by Apostle Paul to the Church or Community (Kehillah) of The Messiah in Rome between 56AD and 58AD.  
        </Text>
               <Text style={styles.paragraph}>
               At this time, Paul had not yet visited the Church in Rome. The letter was to introduce himself, and to also encourage the believers in Rome to grow and remain steadfast in The LORD. They were not to be ashamed of the Gospel of Good News because it is the power of God unto Salvation. They were to remain faithful.           </Text>
        <Text style={styles.paragraph}>
        Paul warns against sexual immorality and unnatural Relationships. He warns of the wrath of God that would come on the unrighteous, those who deny Him and end up with reprobate minds. 
        </Text>
                 <Text style={styles.paragraph}>
                 Paul discusses Israel’s zeal for God and of their rejection of the Messiah due to ignorance. He also discusses the power of sin to enslave people. In addition, he discusses about food, and how not to let it become a reason for people of weaker faith to be offended through it.
                 </Text>        

    </View>
)



const styles = StyleSheet.create({
   paragraph: {
       paddingLeft: 20
   }
})

export default RomansIntroduction