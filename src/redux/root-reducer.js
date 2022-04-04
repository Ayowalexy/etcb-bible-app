import { combineReducers } from 'redux'
import booksReducer from './books/books.reducer';
import chapterReducer from './chapter/chapter.reducer';
import verseReducer from './verse/verse.reducer';
import searchReducer from './search/search.reducer';
import bookmarkReducer from './bookmark/book.reducer';
import hightLightReducer from './highlight/highlight.reducer';
import { persistReducer } from 'redux-persist'
import dayNightReducer from './day-night/day-night.reducer';
import noteReducer from './notes/notes.reducer';
import searchHistory from './history/history.reducer';
import tokenReducer from './token/token.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['bookmark', 'token', 'highlight', 'book', 'chapter', 'verse', 'note', 'history']
}


const rootReducer =  combineReducers({
    book: booksReducer,
    chapter: chapterReducer,
    verse: verseReducer,
    search: searchReducer,
    bookmark: bookmarkReducer,
    highlight: hightLightReducer,
    style: dayNightReducer,
    note: noteReducer,
    history: searchHistory,
    token: tokenReducer
})



export default persistReducer(persistConfig, rootReducer)