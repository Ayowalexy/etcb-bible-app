const historyUtils = (oldState, newState) => {
    let history = []
     oldState ? history.push(...oldState) : null
    history.push(newState)

    
    return history
}

export default historyUtils