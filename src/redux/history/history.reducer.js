import historyUtils from './history.utils';

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
        default: {
            return state
        }
    }
}

export default searchHistory