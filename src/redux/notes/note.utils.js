const noteUtils = (oldState, newState) => {
    let notes = []
    oldState ? notes.push(...oldState) : null
    notes.push(newState)

    
    return notes
}

export default noteUtils