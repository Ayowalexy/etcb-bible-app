const INITIAL_STATE = {
    text: '',
    wordText: ''
}

const searchReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SEARCH': {
            return {
                ...state,
                text: action.payload
            }
        }

        default: 
            return state
    }
}

export default searchReducer