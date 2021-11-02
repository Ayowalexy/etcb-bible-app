const highlightUtils = (oldState, newState) => {
    let verses = []
     oldState ? verses.push(...oldState) : null
    verses.push(newState)
    
    return verses
}

export default highlightUtils