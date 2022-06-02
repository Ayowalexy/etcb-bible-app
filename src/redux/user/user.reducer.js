const INITIAL_STATE = {
    currentUser: {
        email: '',
        loggedIn: false,
        subscriptionStatus: {
            started: '',
            expires: '',
            subscribed: false
        }
    },
    currentID: {
        id: 1,
        day: 0
    }
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'UPDATE_USER_DATA':
            return {
                ...state,
                currentUser: action.payload
            }
        default : return state
    }
}

export default userReducer