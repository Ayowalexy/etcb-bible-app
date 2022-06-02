import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Colors } from '../../assets/Colors';

const Other = () => (
    <ScrollView>
        <View style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            marginTop: 30
        }}>
            <Text style={{
                        fontWeight: 'bold',
                        fontSize: 17,
                        textAlign: 'center'
                    }}>
            Other Key Features Of ETB
            </Text><Text>{"\n"}</Text>
            <Text style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        textAlign: 'center'
                    }}>
                ETB Is Not Just About End Time. <Text>{"\n"}</Text>
                It's a complete Bible from Genesis To Revelation. <Text>{"\n"}</Text>
                But ETB also makes End Time Events and Prophecies <Text>{"\n"}</Text>
                clearly marked and more easily understood, <Text>{"\n"}</Text>
                just as in the Scriptures.<Text>{"\n"}</Text>
            </Text>

            <View style={{
                width: '100%'
            }}>
                <Text style={{fontWeight: 'bold'}}>Features of End Time Bible, ETB </Text>
                {
                    [
                        "ETB Is Complete With OT & NT  (Old & New Testaments)",
                        "ETB Is Easy To Read, Understand & Enjoy",
                        "ETB Is Written In Today's Language & Easy To Relate To",
                        "ETB Removes Frustration And Difficulty With Ancient Language",
                        "Words, Phrases or Idioms Without Losing Original Meaning",
                        "No Verses Removed, Deleted or Corrupted or Moved",
                        "ETB Provides Cross-Referencing Features",
                        "ETB Provides Helpful Commentaries For Greater Understanding",
                        "ETB Provides Answers To Age Old & Difficult Bible Questions",
                        "ETB Features Inbuilt Dictionary With Alternative / Similar Words",
                        "ETB Uses Color Schemes To Distinguish Between Speakers (OT & NT)",
                        "ETB Makes End Time Events  & Prophecies Easy To Follow",
                        "ETB Features Modern  & Ancient Biblical Units Of Measurement Together",
                        "ETB Is Excellent For Entire Family, Church Groups & Personal Study",
                        "ETB Hard Copy Versions For Adults & Children (Large or Small Print).",
                        "ETB Is For Both Jews & Gentiles Alike With Hebrew/Latin/English Names & Keywords",
                        "ETB Is The Bible For Today. Complete As Ancient Bibles And Enjoyable In Today's Language ",
                        "Recent Dead Sea Scrolls By Israel Supports Accuracy Of ETB ",
                        "ETB Is For End Time Evangelism & Soul Winning For Heaven.",
                        "ETB Is About Souls, God's Kingdom, His Name & Glory"
                    ].map((data, idx) => (
                        <View
                        key={idx}
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            paddingBottom: 20,
                            paddingTop: 20,
                            borderBottomWidth: 1
                        }}>
                            <View 
                                style={{
                                    width: 10,
                                    height: 10,
                                    backgroundColor: Colors.DEFAULT,
                                    borderRadius: 40,
                                    marginRight: 20
                                }}
                            />
                            <View style={{
                                marginRight: 20
                            }}>
                                <Text>{data}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    </ScrollView>
)

export default Other