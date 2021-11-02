const INITIAL_CHAPTER = {
    chapters: 1,
    EnglishName: 'Exodus'
}

const chapterReducer = (state = INITIAL_CHAPTER, action) => {
    switch(action.type){
        case 'SET_CURRENT_CHAPTER':
            return {
                ...state,
                setCurrentChapter: action.payload
            }
        
            default:
                return state
    }
}

export default chapterReducer