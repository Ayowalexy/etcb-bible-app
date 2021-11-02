import React from 'react'
import { connect } from 'react-redux'
import ScrollPassage from './scroll-passage'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'





const Tab = createMaterialTopTabNavigator()

let arr;

const PassageUtils = ({chapters, EnglishName}) => {
     arr = [1,2]
    for(let i = 0; i <= chapters; i++){
        arr.push(<Tab.Screen name={`${EnglishName + i}`} component={ScrollPassage} key={i}/>)
    }

    return arr
}

export default PassageUtils

// PassageUtils()

// const mapStateToProps = state => ({
//     currentBook: state.book.setCurrentBook[0] || state.book.setCurrentBook
// })

// console.log(PassageUtils[0], 'Passage Utils')

// export default connect(mapStateToProps)(PassageUtils)