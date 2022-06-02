export const bookmarkUtils = (prevState, newState) => {

    let useBook = prevState.filter(b => !(Object.is(null, b)))
    useBook = useBook.filter(b => typeof b !== "undefined")
    if(useBook){
        for(let book of useBook){
            if(book.EnglishName === newState.EnglishName && book.chapter === newState.chapter && book.verse_number === newState.verse_number){
               useBook.splice(useBook.indexOf(book), 1)
            }
        }
    } else {
       return useBook
    }

    return useBook
}

export const addBookmarkUtils = (oldState, newState) => {
    let verses = []
     oldState ? verses.push(...oldState) : null
    verses.push(newState) 
    return verses
}
