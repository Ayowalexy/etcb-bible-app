import historyUtils, { deleteHistory } from './history.utils';

const INITIAL_STATE = {
    text: ''
}

const searchHistory = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_SEARCH_HISTORY':
            return {
                ...state,
                text: historyUtils(state.text, action.payload)
            }
        case 'DELETE_SEARCH': 
            return {
                ...state,
                text: deleteHistory(state.text, action.payload)
            }
        default: {
            return state
        }
    }
}

export default searchHistory