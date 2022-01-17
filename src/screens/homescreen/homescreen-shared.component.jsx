import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    TouchableOpacity,
    View,
    Image
  } from 'react-native';
  import Ionicons from '@expo/vector-icons/Ionicons'
  import styles from './homescreen'

  

  const HomeScreenShared = ({navigation}) => (
      <View style={styles.container}>
          {/* <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.box}
            onPress={() => navigation.navigate('Passage')}
        
        > 
            <View style={styles.box_inner}>
                <View>
                    <Ionicons name='book' color='#171C24' size={35} />
              </View>
              <View><Text style={styles.box_text}>Read</Text></View>
            </View>
        </TouchableOpacity > */}
         <TouchableOpacity 
          activeOpacity={0.8}
          style={styles.box}
          onPress={() => navigation.navigate('Locate')}  
          
        >
          
            <View style={styles.box_inner}>
                <View>
                   <Ionicons name='checkbox-sharp' color='#171C24' size={35} />
              </View>
              <View>
                <Text style={styles.box_text}>Locate</Text>
              </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.box}
            onPress={() => navigation.navigate('Search')}
        >
            <View style={styles.box_inner}>
                <View>
                   <Ionicons name='documents' color='#171C24' size={35} />
              </View>
              <View>
                <Text style={styles.box_text}>Search</Text>
              </View>
            </View>
        </TouchableOpacity>
       
        <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.box}
            onPress={() => {
                navigation.navigate('History')
            }}
        >
            <View style={styles.box_inner}>
                <View>
                    <Ionicons name='md-locate' color='#171C24' size={35} />
              </View>
              <View>
                  <Text style={styles.box_text}>History</Text>
              </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.box}
            onPress={() => navigation.navigate('Compare')}
        >
            <View style={styles.box_inner}>
                <View>
                    <Ionicons name='ios-calendar' color='#171C24' size={35} />
              </View>
              <View>
                <Text style={styles.box_text}>Compare</Text>
              </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
            activeOpacity={0.8}
            style={[styles.box, { flexGrow: 0.8}]}
            onPress={() => navigation.navigate('Premium')}      
        >
            <View style={[styles.box_inner, { alignSelf: 'center'}]}>
                <View>
                    <Ionicons name='star' color='#171C24' size={35} />
              </View>
              <View>
                  <Text style={[styles.box_text, { marginLeft: -20}]}>Premium</Text>
              </View>
            </View>
        </TouchableOpacity>
      </View>
  )

  export default HomeScreenShared