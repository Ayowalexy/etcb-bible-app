const INITIAL_STATE = {
    setStyle: {
        backgroundColor: 'white',
        color: 'black'
    }
}

const dayNightReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_DAY_AND_NIGHT': 
            return {
                ...state,
                setStyle: action.payload
            }
         default: 
          return state
    }
}

export default dayNightReducer