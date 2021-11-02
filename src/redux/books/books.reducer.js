import { booksUtils, chapterUtils } from './books-utils';
const INITIAL_STATE = {
    fontSize: 18,
    fontColor: 'black',
    book: {
            EnglishName: 'Exodus',
            HebrewName: 'Shemot ',
            chapters: 5,
            id: 2,
            currentChapter: 1
            
    },
    setCurrentBook: {
            EnglishName: 'Exodus',
            HebrewName: 'Shemot ',
            chapters: 5,
            id: 2,
            currentChapter: 1
         }
       
}



const booksReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_BOOK': 
            return {
                ...state,
                setCurrentBook: action.payload
               
            }

        case 'SET_CURRENT_BOOK_CHAPTER':
            return {
                ...state, 
                setCurrentBookChapter: chapterUtils(action.payload)
            }

        case 'SET_FONT_SIZE': 
            return {
                ...state,
                fontSize: action.payload
            }

        case 'SET_FONT_COLOR': 
            return {
                ...state,
                fontColor: action.payload
            }

            case 'SET_DATA': 
                return {
                    ...state,
                    book: action.payload
                }
        default: 
            return state
    }
}

export default booksReducer