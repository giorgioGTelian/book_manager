import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from './books/BookSlice';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function BookSearchPage() {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const { books, isLoading, error } = useSelector(state => state.books);

    const handleSearch = () => {
    dispatch(fetchBooks(query));
};
const navigate = useNavigate(); // renamed for clarity


const handleBackClick = () => {
    navigate(-1); // go back to the previous page
};

return (
    <>
    <div>
        <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {books.map(book => (
            <div key={book.id}>
                <h2>{book.volumeInfo?.title}</h2>
                <p>{book.volumeInfo?.authors?.join(', ')}</p>
                <p>{book.volumeInfo?.publishedDate}</p>
                <p>{book.volumeInfo?.description}</p>
                {book.volumeInfo?.imageLinks?.thumbnail && (
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={`${book.volumeInfo.title} cover`} />
                )}
            </div>
        ))}

    </div>
    <Button variant="secondary" onClick={handleBackClick}>Torna indietro</Button>
    </>
    );
}

export default BookSearchPage;
