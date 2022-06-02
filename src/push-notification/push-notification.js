
// registerForPushNotificationsAsync()


// let num = 1;
// let match = '' || DAILY_VERSES[0];

//  setInterval(function(){
//     match = DAILY_VERSES.find(verse => {
//       if(verse.id === num){
//         num = num + 1;
//         //  console.log(verse , 'Pushing')
//         return verse
//       }
//    })
//  }, 50000)


//  setInterval(() => {
//   console.log(match, 'matched')
//  }, 6000)

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });


// setInterval(() => {
  // Notifications.scheduleNotificationAsync({
  //   content: {
  //     title: `Hello`,
  //     body: `World`
  //   },
  //   trigger: {
  //     seconds: 10,
  //     // repeats: true
  //   }
  // })
// }, 60000);


// const red = Notifications.cancelAllScheduledNotificationsAsync()
// console.log(red)

import React from 'react'
import { ScrollView} from 'react-native'
import NewSubScription from '../components/Subscription/New-Subscription'
import ReturningUser from '../components/Subscription/Returning-User';
import { useSelector } from 'react-redux';

const Ap = () => {
  const user = useSelector(state => state.user.currentUser.subscriptionStatus)
  console.log('status', user)
  return (
    <ScrollView>
     {
       user.subscribed ? (<ReturningUser />) : (<NewSubScription />)
     }
    </ScrollView>
  );
}


export default Ap