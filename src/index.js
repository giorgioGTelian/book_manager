import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";


// Configure routes for redux
import HomeRedux from './redux/screens/home'; 
import Book from './redux/screens/book';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './configureStore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />}>
            <Route path = "book" element = {<BookList />} />
            <Route path = "/book/:id" element = {<BookDetails />} />
            <Route path = "/Home-redux" element = {<HomeRedux />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </Provider>
);