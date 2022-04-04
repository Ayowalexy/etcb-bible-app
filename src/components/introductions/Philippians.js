import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const PhilippiansIntroduction = () => (
    <View>
        <Text>The Epistle || Iggeret Of Paul To The   </Text>
        <Text>Community || Kehillah Of The Messiah In Philippi</Text>
        <Text style={styles.paragraph}>
        The Book of Philippians also known as The Epistle or Iggeret to the Philippians is the elevnth book of the New Testament. It was written by Apostle Paul to the Church or Community (Kehillah) of The Messiah in Philippi between 61AD.           </Text>
               <Text style={styles.paragraph}>
               At this time, Paul was still in prison, but looking forward to his release.                   </Text>
               <Text style={styles.paragraph}>
               The Philippians Church continued to support Paul, and he wrote to thank them for it.                  </Text>
               <Text style={styles.paragraph}>
               Paul  also let them know that it is worth everything to live for The Messiah. He said, to live is The Messiah, and to die is gain (more beneficial). Living in the body means winning more souls for the Kingdom of  God.                            </Text>
               <Text style={styles.paragraph}>
               Apostle Paul also encouraged them to live like The Messiah. He humbled Himself before God, even though He had same identity with God. For this reason, God highly exalted Him by giving Him a Name above all names, in heaven, on earth and under the earth, and every tongue will confess that Yeshua The Messiah is LORD.                    </Text>
        
    </View>
)



const styles = StyleSheet.create({
   paragraph: {
       paddingLeft: 20
   }
})

export default PhilippiansIntroduction