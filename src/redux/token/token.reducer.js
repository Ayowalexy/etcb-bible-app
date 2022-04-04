const INITIAL_STATE = {
    token: ''
}


const tokenReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload
            }

    case 'DEL_TOKEN': return {
        ...state,
        token: ''
    }
        default :
            return state
    }
}

export default tokenReducer