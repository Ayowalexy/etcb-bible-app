import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const Hebrews_Introduction = () => (
    <View>
        <Text>The Epistle || Iggeret </Text>
        <Text>To  Hebrews || Yehudim </Text>
        <Text style={styles.paragraph}>
        The Book of Hebrews or Yehudim also known as The Epistle or Iggeret to Hebrews or Yehudim is the nineteenth book of the New Testament. It was written around 66AD. 
                                           </Text>
               <Text style={styles.paragraph}>
               Though the name of the written was not stated, but it can be concluded to be by Apostle Paul. This is inferred from the language and manner of discussions, similar to his other letters. Also he showed a very deep knowledge of Judaism and Torah and he mentioned Timothy, (who Paul refers to as his son by faith and worked with Paul).  
                                                                              </Text>
               <Text style={styles.paragraph}>
               The Hebrew believers were under intense persecution. For this reason, many of them were thinking of giving up their faith in The LORD and returning to their practices under the Law or Torah. The Epistle explains very clearly to them why it would be a step backwards, and why they need to continue in their faith in Yeshua The Messiah, The High Priest and Mediator for all believers.
                                                                                             </Text>
               
    </View>
)



const styles = StyleSheet.create({
   paragraph: {
       paddingLeft: 20
   }
})

export default Hebrews_Introduction