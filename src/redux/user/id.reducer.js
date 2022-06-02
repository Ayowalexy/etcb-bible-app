const INITIAL_STATE = {
    currentID: {
        id: 1,
        day: 0
    }
}

const idReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DAILY_BOOK':
            return {
                ...state,
                currentID: action.payload
            }
        default : return state
    }
}

export default idReducer