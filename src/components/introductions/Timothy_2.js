import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const Timothy_2_Introduction = () => (
    <View>
        <Text>The Second Epistle || Iggeret Of Paul </Text>
        <Text>To Timothy || Timoti </Text>
        <Text style={styles.paragraph}>
        The Book of 2 Timothy also known as The Second Epistle or Iggeret to Timothy is the sixteenth book of the New Testament. It was written by Apostle Paul to Timothy around 67AD. This was while he was in prison. It was his last letter before he was executed by the Romans. He wrote it to encourage Timothy and believers to stand firm in their faith in The LORD.
                           </Text>
               <Text style={styles.paragraph}>
               Apostle Paul addressed Timothy as his dear son. Timothy had a Hebrew mother and a Greek father. They lived in Lystra, where Paul was stoned to death and dragged out of the city. The brethren prayed for him and he came back to life. 
                                                </Text>
               <Text style={styles.paragraph}>
               Paul had also circumcised Timothy because of the work he and Paul would be doing among the Jews.
                                 </Text>
               
    </View>
)



const styles = StyleSheet.create({
   paragraph: {
       paddingLeft: 20
   }
})

export default Timothy_2_Introduction