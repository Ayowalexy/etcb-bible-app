import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView,StatusBar,Dimensions, TouchableOpacity,  } from 'react-native';


const Prompt = () => {
    const [index, setIndex] = useState(0);
    return (
        <ScrollView >
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>ETB BIBLE</Text>
                    <Text style={styles.sub_text}>The End Time translation</Text>
                </View>

                <View style={styles.icon}>

                    <Text>Icon</Text>
                </View>
                <ScrollView 
                   onMomentumScrollEnd={() => {
                        // index ===  4 ? null : setIndex(0);
                       setIndex(prevState = prevState + 1)
                   }}
                    horizontal={true}
                    snapToStart={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View  style={{
                        width: Dimensions.get('screen').width
                    }}>
                        <Text style={styles.text}>All Verses are complete</Text>
                        <Text style={styles.text_sub}>No Verse is removed, deleted or corrupted or moved</Text>
                    </View>
                    <View  style={{
                        width: Dimensions.get('screen').width
                    }}>
                        <Text style={styles.text}>All Verses are complete</Text>
                        <Text style={styles.text_sub}>No Verse is removed, deleted or corrupted or moved</Text>
                    </View>
                    <View  style={{
                        width: Dimensions.get('screen').width
                    }}>
                        <Text style={styles.text}>All Verses are complete</Text>
                        <Text style={styles.text_sub}>No Verse is removed, deleted or corrupted or moved</Text>
                    </View>
                    <View  style={{
                        width: Dimensions.get('screen').width
                    }}>
                        <Text style={styles.text}>All Verses are complete</Text>
                        <Text style={styles.text_sub}>No Verse is removed, deleted or corrupted or moved</Text>
                    </View>
                </ScrollView>
                

                <View style={styles.indicator_container}>
                    <View style={[styles.indicator, {}]}></View>
                    <View style={[styles.indicator, {}]}></View>
                    <View style={[styles.indicator, {}]}></View>
                    <View style={[styles.indicator, {}]}></View>
                </View>

                <View style={styles.box}>
                        <TouchableOpacity style={styles.inner_box}>
                            <Text>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.inner_box}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 40,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        fontSize: 20,
        fontWeight: "bold"
    },
    sub_text: {
        fontWeight: "bold"
    },
    text: {
        fontWeight: "bold",
        fontSize: 23,
        textAlign: "center"
    },
    text_sub: {
        fontSize: 18,
        width: 330,
        textAlign: "center",
        marginBottom: 30
    },
    indicator: {
        width: 15,
        height: 15,
        borderRadius: 20,
        backgroundColor: "black",
        marginBottom: 20,
    },
    icon: {
        height: 250
    },
    box: {
        flex: 1,
        flexDirection: "row",
        paddingLeft: 20,
        paddingRight: 20,
        width: Dimensions.get('screen').width,
        justifyContent: "space-between"
    },
    inner_box: {
        borderRadius: 5,
        borderColor: "black",
        flex: 1,
        marginRight: 10,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        width: (Dimensions.get('screen').width / 2) - 20,
        borderStyle: 'solid',
        borderWidth: 2
    },
    indicator_container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: 70,
        marginBottom: 120
    }
})

export default Prompt