import{ bookmarkUtils, addBookmarkUtils} from './bookmark.utils';


const INITIAL_STATE = {
    book : ''
}

const bookmarkReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SET_BOOKMARK':
            return {
                ...state,
                book: addBookmarkUtils(state.book, action.payload)
            }

        case 'RESET_BOOKMARK': 
            return {
                ...state,
                book: ''
            }

        case 'DELETE_BOOKMARK': 
            return {
                ...state,
                book: bookmarkUtils(state.book, action.payload)
            }
        default: 
            return state
           
    }
}

export default bookmarkReducer