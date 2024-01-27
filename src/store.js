import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/books/BookSlice';

export default configureStore({
    reducer: {
        books: booksReducer,
    },
});
