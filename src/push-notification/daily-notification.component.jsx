// import Constants from 'expo-constants';
// import * as Notifications from 'expo-notifications';
// import React, { useState, useEffect, useRef } from 'react';
// import { Text, View, Button, Platform } from 'react-native';




// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//       shouldShowAlert: true,
//       shouldPlaySound: false,
//       shouldSetBadge: false
//   })
// });

// const getPushToken = () => {
//   if (!Constants.isDevice) {
//       return Promise.reject('Must use physical device for Push Notifications');
//   }

//   try {
//       return Notifications.getPermissionsAsync()
//           .then((statusResult) => {
//               return statusResult.status !== 'granted'
//                   ? Notifications.requestPermissionsAsync()
//                   : statusResult;
//           })
//           .then((statusResult) => {
//               if (statusResult.status !== 'granted') {
//                   throw 'Failed to get push token for push notification!';
//               }
//               return Notifications.getExpoPushTokenAsync();
//           })
//           .then((tokenData) => tokenData.data);
//   } catch (error) {
//       return Promise.reject("Couldn't check notifications permissions");
//   }
// };

// export default function Push() {
//   const [expoPushToken, setExpoPushToken] = useState('');
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [notification, setNotification] = useState();
//   const notificationListener = useRef();
//   const responseListener = useRef();

//   useEffect(() => {
//       getPushToken().then((pushToken) => {
//           setExpoPushToken(pushToken);
//           if (pushToken) {
//               retrieveWeatherSubscription(pushToken, setIsSubscribed);
//           }
//       });

//       notificationListener.current =
//           Notifications.addNotificationReceivedListener(setNotification);

//       responseListener.current = Notifications.addNotificationResponseReceivedListener(
//           (response) => {
//               setNotification(response.notification);
//           }
//       );

//       return () => {
//           notificationListener.current &&
//               Notifications.removeNotificationSubscription(notificationListener.current);
//           responseListener.current &&
//               Notifications.removeNotificationSubscription(responseListener.current);
//       };
//   }, []);
//  return (
//    <View>
//      <Text>Hello</Text>
//    </View>
//  )
// }
// // Notifications.setNotificationHandler({
// //   handleNotification: async () => ({
// //     shouldShowAlert: true,
// //     shouldPlaySound: false,
// //     shouldSetBadge: false,
// //   }),
// // });

// // export default function DaliyNotification() {
// //   const [expoPushToken, setExpoPushToken] = useState('');
// //   const [notification, setNotification] = useState(false);
// //   const notificationListener = useRef();
// //   const responseListener = useRef();

// //   useEffect(() => {
// //     registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

// //     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
// //       setNotification(notification);
// //     });

// //     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
// //       console.log(response);
// //     });

// //     return () => {
// //       Notifications.removeNotificationSubscription(notificationListener.current);
// //       Notifications.removeNotificationSubscription(responseListener.current);
// //     };
// //   }, []);

// //   return (
// //     <View
// //       style={{
// //         flex: 1,
// //         alignItems: 'center',
// //         justifyContent: 'space-around',
// //       }}>
// //       <Text>Your expo push token: {expoPushToken}</Text>
// //       <View style={{ alignItems: 'center', justifyContent: 'center' }}>
// //         <Text>Title: {notification && notification.request.content.title} </Text>
// //         <Text>Body: {notification && notification.request.content.body}</Text>
// //         <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
// //       </View>
// //       <Button
// //         title="Press to schedule a notification"
// //         onPress={async () => {
// //           await schedulePushNotification();
// //         }}
// //       />
// //     </View>
// //   );
// // }

// // async function schedulePushNotification() {

// //   console.log('hello')
// //   await Notifications.scheduleNotificationAsync({
// //     content: {
// //       title: "You've got mail! 📬",
// //       body: 'Here is the notification body',
// //       data: { data: 'goes here' },
// //     },
// //     trigger: {
// //          seconds: 60,
// //          repeats: true
// //     }
// //   });
// // }

// // async function registerForPushNotificationsAsync() {
// //   let token;
// //   if (Constants.isDevice) {
// //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
// //     let finalStatus = existingStatus;
// //     if (existingStatus !== 'granted') {
// //       const { status } = await Notifications.requestPermissionsAsync();
// //       finalStatus = status;
// //     }
// //     if (finalStatus !== 'granted') {
// //       alert('Failed to get push token for push notification!');
// //       return;
// //     }
// //     token = (await Notifications.getExpoPushTokenAsync()).data;
// //     console.log(token);
// //   } else {
// //     alert('Must use physical device for Push Notifications');
// //   }

// //   if (Platform.OS === 'android') {
// //     Notifications.setNotificationChannelAsync('default', {
// //       name: 'default',
// //       importance: Notifications.AndroidImportance.MAX,
// //       vibrationPattern: [0, 250, 250, 250],
// //       lightColor: '#FF231F7C',
// //     });
// //   }

// //   return token;
// // }
// // const red = Notifications.cancelAllScheduledNotificationsAsync()
// //  console.log(red)