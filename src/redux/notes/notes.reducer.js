import noteUtils from './note.utils';

const INITIAL_STATE = {
    notes: ''
}


const noteReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_NOTE':
            return {
                ...state,
                notes: noteUtils(state.notes, action.payload)
            }
        
        default: {
            return state
        }
    }
}

export default noteReducer