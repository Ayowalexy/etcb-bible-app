import React from 'react';
import { View, Text, ScrollView } from 'react-native'


const Language = () => {
    return (
        <ScrollView>
        <View style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            marginTop: 30
        }}>
            <Text 
                style={{
                    fontWeight: 'bold',
                    fontSize: 17,
                    textAlign: 'center'
                }}
            >Compare: <Text>{"\n"}</Text>Language Simplicity</Text>
            <Text>
            The End Time Bible, ETB, is easy to read, understand and relate to in today's 
            language. It removes potential frustrations and difficulties with ancient 
            language, words, phrases or idioms, without losing the meaning of the 
            original message. Here are just a few of many examples
            </Text>

            <Text style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    textAlign: 'center',
                    marginTop: 20,
                    paddingTop: 20,
                    width: '100%',
                    borderTopWidth: 1
                }}>Example 1:</Text>
           <Text style={{
               textAlign: 'center'
           }}>
            <Text style={{fontWeight: 'bold'}}>Song of Solomon 6:4 (KJV)</Text><Text>{"\n"}</Text>
            Thou art beautiful, O my love, as Tirzah,<Text>{"\n"}</Text>
            <Text style={{textDecorationLine: 'underline'}}>comely</Text> as Jerusalem, <Text style={{textDecorationLine: 'underline'}}>terrible</Text> as an army with banners.<Text>{"\n"}</Text>
           </Text>


         

           <Text style={{
               textAlign: 'center',
               paddingBottom: 20,
               borderBottomWidth: 1

           }}>
           <Text style={{fontWeight: 'bold'}}>Song of Solomon 6:4 (ETB):</Text><Text>{"\n"}</Text>
           My love, you are as beautiful as Tirzah,<Text>{"\n"}</Text>
           <Text style={{textDecorationLine: 'underline'}}>Lovely </Text> as Jerusalem,  <Text style={{textDecorationLine: 'underline'}}>Awesome (terrific) </Text>as an army with banners!

           </Text>



           <Text style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    textAlign: 'center',
                    marginTop: 20
                }}>Example 2:</Text>
           <Text style={{
               textAlign: 'center'
           }}>
           <Text style={{fontWeight: 'bold'}}>Psalm 65:5 (KJV)</Text><Text>{"\n"}</Text>
           By <Text style={{textDecorationLine: 'underline'}}>terrible things</Text> in righteousness wilt thou answer us, <Text>{"\n"}</Text>
           O God of our salvation; who art the confidence of all the ends of the earth, 
            <Text>{"\n"}</Text>and of them that are afar off upon the sea:

           </Text>
           <Text>{"\n"}</Text>

           <Text style={{
               textAlign: 'center',
               paddingBottom: 20,
               borderBottomWidth: 1
           }}>
           <Text style={{fontWeight: 'bold'}}>Psalm 65:5  (ETB)</Text><Text>{"\n"}</Text>
           You answer us with  <Text style={{textDecorationLine: 'underline'}}>Your awesome</Text> righteous doings<Text>{"\n"}</Text>
           O God of our salvation. You are the hope of all the ends of the earth, 
            <Text>{"\n"}</Text>And of them far away on the seas
           </Text>



           <Text style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    textAlign: 'center',
                    marginTop: 20
                }}>Example 3:</Text>
           <Text style={{
               textAlign: 'center'
           }}>
           <Text style={{fontWeight: 'bold'}}>Psalm 47:2 (KJV)</Text><Text>{"\n"}</Text>
           For the Lord most high is<Text style={{textDecorationLine: 'underline'}}> terrible; </Text>          
             he is a great King over all the earth
           </Text>
           <Text>{"\n"}</Text>

           <Text style={{
               textAlign: 'center'
           }}>
           <Text style={{fontWeight: 'bold'}}>Psalm 47:2 (ETB)</Text><Text>{"\n"}</Text>
           For The LORD (ADONAI) Most High Is <Text style={{textDecorationLine: 'underline'}}>Awesome</Text>.
          <Text>He is a great King over all the earth.</Text>
           </Text>
        </View>
        </ScrollView>
    )
}

export default Language