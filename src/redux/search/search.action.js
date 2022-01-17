export const searchText = text => ({
    type: 'SEARCH',
    payload: text
})

export const deleteText = text => ({
    type: 'DELETE_SEARCH',
    payload: text
})