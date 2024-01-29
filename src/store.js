import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/books/BookSlice';
import {ReactReduxContext} from 'react-redux';

export default configureStore({
    reducer: {
        books: booksReducer,
    },
});

//use redux to check states and dispatch actions
