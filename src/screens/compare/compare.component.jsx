import React from 'react'
import { View, Text, ScrollView } from 'react-native'


const Compare = () => (
    <ScrollView>
        <View style={{margin: 10}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>====Comparisons====</Text>
            </View>
            <View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>a)</Text>
                    </View>
                    <View style={{marginLeft: 10, marginRight: 10}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Language Differences</Text>
                        <Text>
                            The End Time Bible, ETB, is easy to read, understand and relate to in 
                            today’s language. It removes potential frustrations and difficulties 
                            with ancient language, words, phrases or idioms, without losing the
                            meaning of the original message.
                        </Text>

                        
                        <Text style={{marginTop: 20, fontSize: 15, fontWeight: 'bold'}}>Song of Solomon 6:4 (KJV)</Text>
                        <Text>
                            Thou art beautiful, O my love, as Tirzah, comely as Jerusalem, terrible as an army with banners.
                        </Text>

                        <Text style={{marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>Song of Solomon 6:4 (ETB)</Text>
                        <Text>
                             My love, you are as beautiful as Tirzah, Lovely as Jerusalem, Awesome (terrific) as an army with banners!
                        </Text>

                        <Text style={{marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>Psalm 65:5 (KJV)</Text>
                        <Text>
                            By terrible things in righteousness wilt thou answer us, O God of our salvation; who art the confidence of all the ends of the earth, and of them that are afar off upon the sea:
                        </Text>

                        <Text style={{marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>Psalm 65:5  (ETB)</Text>
                        <Text>
                            You answer us with  Your awesome righteous doings, O God of our salvation. You are the hope of all the ends of the earth, And of them far away on the seas.
                        </Text>
                    </View>
                </View>



                <View style={{flex: 1, flexDirection: 'row', marginTop: 30}}>
                    <View>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>b)</Text>
                    </View>
                    <View style={{marginLeft: 10, marginRight: 10}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Content And Verse Differences</Text>
                    
                        <Text style={{marginTop:10, fontSize: 15, fontWeight: 'bold'}}>Genesis 27:39  (KJV )</Text>
                        <Text>
                            And Isaac his father answered and said unto him, Behold, thy dwelling shall 
                            <Text style={{textDecorationLine: 'underline'}}> be the fatness of the earth, and of   
                            the dew of heaven from above.</Text>

                        </Text>

                        <Text style={{marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>Genesis 27:39  (NIV)</Text>
                        <Text>
                            His father Isaac answered him, “Your dwelling will
                            <Text style={{textDecorationLine: 'underline'}}> be away 
                            from the earth’s richness, away from the dew</Text> of 
                            heaven above

                        </Text>

                        <Text style={{marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>Genesis 27:39  (ETB )</Text>
                        <Text>
                            Then Isaac his father answered and said to him: “Know this, your home will 
                            <Text style={{textDecorationLine: 'underline'}}> be of the rich places of the earth, 
                            and of the dew</Text> from heaven above.

                        </Text>

                        <Text style={{marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>1John 5:7-8 (NIV) </Text>
                        <Text>
                            7 For there are three that testify: 
                         </Text>
                         <Text>
                             8 the Spirit, the water and the blood; and the three are in agreement. 
                        </Text> 

                        <Text style={{marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>1 John 5:7-8 (ETB) </Text>
                        <Text>
                            7 For there are three that bear witness in heaven: 
                            The Father, The Word, and The Holy Spirit. And       
                            these three are one.

                         </Text>
                         <Text>
                            8 And also there are three that bear witness on earth: The Spirit, The water, and The blood. And these  
                            three agree as one.
                        </Text> 
                        
                        <Text style={{marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>Mark 9:29 (NIV)</Text>
                        <Text>
                            29 He replied, “This kind can come out only by prayer
                        </Text>

                        <Text style={{marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>Mark 9:29 (ETB)</Text>
                        <Text>
                            29 So He said to them: “This kind (of demonic spirit) would not leave except by prayer and fasting”.
                        </Text>

                        <Text style={{marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>Mark 11:26  NIV or NLT or ESV or MSG  </Text>
                        <Text>
                            Removed/Not Available
                        </Text>
                        

                        <Text style={{marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>Mark 11:26 (ETB ) </Text>
                        <Text>
                             “But if you do not forgive, neither will your Father in heaven forgive your sins (trespasses, offences)”.
                        </Text>
                        

                        <Text style={{marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>Matthew 18:11  NIV or NLT or ESV or MSG</Text>
                        <Text>
                            Removed/Not Available
                        </Text>

                        <Text style={{marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>Matthew 18:11  (ETB ) </Text>
                        <Text>
                            “For the Son of Man has come to save that which was lost”.
                        </Text>
                        
                        <Text style={{marginTop: 20}}>
                            The following verses also removed or not available in NIV or NLT or ESV or MSG
                        </Text>
                        <Text>1) Matthew 23:14</Text>
                        <Text>2) Mark 7:16</Text>
                        <Text>3) Mark 9:44</Text>
                        <Text>4) Mark 9:46</Text>
                        <Text>5) Mark 15:28</Text>
                        <Text>6) Luke 17:36</Text>
                        <Text>7) Romans 16:24</Text>
                        <Text>8) Acts 8:37</Text>
                        <Text>9) John 5:4</Text>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
)

export default Compare