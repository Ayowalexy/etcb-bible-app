import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const Matthew = () => (
    <View style={styles.container}>
    <Text style={styles.header}>The Book Of Hosea || Hoshea</Text>
    <Text style={styles.paragraph}>
    Hosea or Hoshea means Salvation or He saves or  'He helps'. The Book of Hosea or Hoshea is the first of the twelve ‘Minor’ books of the prophets of the Hebrew Bible and in the Old Testament. The Book was written by Prophet Hosea, son of Beeri, who lived and prophesied during the reigns of Uzziah (Azariah), Jotham, Ahaz, and Hezekiah. They reigned in succession for a total period of 113 years as kings over Judah. 
                                                                     </Text>
           <Text style={styles.paragraph}>
           Prophet Hosea first started receiving the words much earlier during the reign of Jeroboam the son of Joash as king of Israel, who was already reigning twenty-seven years in Israel before Uzziah became king of Judah. This makes Hosea one of the longest prophets in the Bible. 
                                                                                                                      </Text>               
           <Text style={styles.paragraph}>
           He is regard by the Jews as the greatest prophet of his generation. He prophesied mostly from Samaria among the Northern ten tribes of Israel. The period of His prophetic ministry spanned at least sixty years. He was the only prophet of Northern Israel in his time who left any written prophecy. The Book of Hosea is believed to have been written during the early years of the reign of King Hezekiah of Judah, between 750BC and 725BC. 
                                                                                                                                     </Text>               
           <Text style={styles.paragraph}>
           The people of Israel were into idolatry while still claiming to know and serve God Almighty. Prophet Hosea spoke agaianst sin, spiritual adultery and idolatry. To give more meaning to his prophecies, God directed him on the sinful woman to marry, the names of the children she bore for him and his going to look for her to bring her back home after running away. God was unwavering in His love to Israel despite their idolatry and spiritual harlotry.
                                                                   </Text>               
                                                                                                                                                      
</View>
)



const styles = StyleSheet.create({
    paragraph: {
        padding: 10,
        textAlign: 'center'
    },
    header: {
        fontSize: 18,
        textAlign: 'center'
    },
    container: {
        marginBottom: 20
    }
})

export default Matthew