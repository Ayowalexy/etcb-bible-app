export const bookmarkUtils = (prevState, newState) => {


    
    if(prevState){
        for(let book of prevState){
            if(book.EnglishName === newState.EnglishName && book.chapter === newState.chapter && book.verse_number === newState.verse_number){
               prevState.splice(prevState.indexOf(book), 1)
            }
        }
    } else {
       return prevState
    }

    return prevState
}

export const addBookmarkUtils = (oldState, newState) => {
    let verses = []
     oldState ? verses.push(...oldState) : null
    verses.push(newState) 
    return verses
}
