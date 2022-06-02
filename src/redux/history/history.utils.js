const historyUtils = (oldState, newState) => {
    let history = []

     oldState ? history.push(...oldState) : null
    history.push(newState)

    
    return history
}

export const deleteHistory = (oldState, newState) => {
    let res;
    if(oldState.length){
        res = oldState.filter(data => data.search !== newState)
    }
    return res
}

export default historyUtils