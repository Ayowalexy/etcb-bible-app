const INITIAL_STATE = {
    EnglishName: 'Exodus',
    verses: 1
}

const verseReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
            case 'SET_CURRENT_VERSE':
                return {
                    ...state,
                    setCurrentVerse: action.payload
                }

            default :
             return state
    }
}

export default verseReducer