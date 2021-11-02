import Books from '../../../Books';


export const booksUtils = (oldState, newState) => {
    const {EnglishName, chapters, currentChapter} = oldState;
    console.log(oldState, 'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo')
    if((EnglishName === newState.EnglishName) && ( chapters !== currentChapter) ){
            return [{...oldState, currentChapter: oldState.currentChapter + 1}]
        
        
    } else if(newState.salt === true)  {
        const currentBook = Books.find(book => {
            if(book.EnglishName === newState.EnglishName) {
                return book.id
            }
        })

    

        const match = Books.find(book => book.id === currentBook.id)
        return [{...match, currentChapter: newState.currentChapter}]
        
    }  else  {
        const currentBook = Books.find(book => {
            if(book.EnglishName === newState.EnglishName) {
                return book.id
            }
        })


        const match = Books.find(book => book.id === currentBook.id + 1)
        return [{...match, currentChapter: 1}]
        
    } 
}

export const chapterUtils = (newState) => {
    
    console.log(newState, 'tyeyeyy')
    return newState
}

