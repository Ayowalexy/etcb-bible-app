import React, { useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator, Alert } from 'react-native'

const ReturningUser = () => {
    const [amount, setAmount] = useState('')
    const [text, setText] = useState('')
    const [price, setPrice] = useState('')
    const [spinner, setSpinner] = useState(false)
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Give to End Time Bible Projects</Text>

            <Text style={styles.sub_header}>Give How often?</Text>
            <View style={styles.amount_grp}>
                <TouchableOpacity
                onPress={() => setText('One Time')}
                 style={[styles.border_1, {
                    backgroundColor: text === 'One Time' ? 'rgba(20, 180, 230, 0.9)': 'rgba(20, 180, 230, 0.2)', 
                 }]}>
                    <Text style={[styles.text, {
                    }]}>One Time</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => setText('Monthly')}
                 style={[styles.border_2, {
                    backgroundColor: text === 'Monthly' ? 'rgba(20, 180, 230, 0.9)': 'rgba(20, 180, 230, 0.2)', 
                 }]}>
                    <Text style={styles.text}>Monthly</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.sub_header}>Give How much?</Text>
            <View style={styles._amount_grp}>
                <TouchableOpacity 
                    onPress={() => setPrice('$25')}
                    style={[styles.box, {
                        backgroundColor: price === '$25' ? 'rgba(20, 180, 230, 0.9)': 'rgba(20, 180, 230, 0.2)', 
                }]}>
                    <Text style={styles.text}>$25</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPrice('$50')}
                    style={[styles.box, {
                        backgroundColor: price === '$50' ? 'rgba(20, 180, 230, 0.9)': 'rgba(20, 180, 230, 0.2)', 
                }]}>
                    <Text style={styles.text}>$50</Text>
                </TouchableOpacity >
                <TouchableOpacity  onPress={() => setPrice('$100')}
                    style={[styles.box, {
                        backgroundColor: price === '$100' ? 'rgba(20, 180, 230, 0.9)': 'rgba(20, 180, 230, 0.2)', 
                }]}>
                    <Text style={styles.text}>$100</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.box, {flexGrow: 1}]}>
                    <TextInput
                        value={amount}
                        keyboardType='number-pad'
                        onChangeText={setAmount}
                        placeholder="Other Amount"
                        style={styles.text}
                    
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={() => {
                    setSpinner(true)
                    setTimeout(() => {
                        Alert.alert(
                            "Successfully",
                            "You have succeefully paid"
                        )
                        setSpinner(false)
                    }, 3000)
                }}
             style={styles.give_now}>
                {
                    spinner ? (
                        <ActivityIndicator size={20} color='#fff' />
                    ) : (
                        <Text style={styles.text}>Give Now</Text>
                    )
                }
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 17
    },
    header: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#000"
    },
    sub_header: {
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 40,
        color: "#000"
    },
    amount_grp: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    _amount_grp: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    amount: {
        width: '50%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
     border_1: {
        backgroundColor: 'rgba(20, 180, 230, 0.9)',
        borderTopLeftRadius: 40,
        marginRight: 5,
        borderBottomLeftRadius: 30,
        width: '50%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
     border_2: {
         marginTop: 20,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 30,
        backgroundColor: 'rgba(20, 180, 230, 0.2)',
        width: '50%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        
    }, active : {
        backgroundColor: 'rgba(0,0,189, 0.6)'
    },
    box: {
        width: 90,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(20, 180, 230, 0.2)',
        marginRight: 10,
        marginTop: 10
    },
    give_now: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 60,
        // position: 'absolute',
        bottom: 20,
        marginTop: 160,
        backgroundColor: 'rgba(20, 180, 230, 0.9)'       
    }
    
    
})

export default ReturningUser