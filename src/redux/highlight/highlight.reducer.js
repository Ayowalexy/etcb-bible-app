import highlightUtils from './highlight.utils';

const INITIAL_STATE = {
    verse: ''
}



const hightLightReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_HIGHLIGHT':
            return {
                ...state,
                verse : highlightUtils(state.verse, action.payload)
            }

        case 'RESET_STATE': 
            return {
                ...state,
                verse: ''
            }
        
        default :
            return state
    }
}

export default hightLightReducer