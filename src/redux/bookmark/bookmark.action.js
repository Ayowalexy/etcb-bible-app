export const setBookMark = book => ({
    type: 'SET_BOOKMARK',
    payload: book
})

export const resetBookmark = book => ({
    type: 'RESET_BOOKMARK',
    payload: book
})

export const deleteBookmark = book => ({
    type: 'DELETE_BOOKMARK',
    payload: book
})