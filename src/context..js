import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
import { ReactReduxContext } from 'react-redux';
const URL = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext(); // Creating a React Context for global state management

//use redux to check states and dispatch actions
const {store} = useContext(ReactReduxContext);
const {dispatch} = store;
const action = {
    type: 'SET_SEARCH_TERM',
    payload: 'the lost world'
}
dispatch(action);
console.log(store.getState());
/**
 * AppProvider component that provides global state to its children.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The JSX element representing the AppProvider component.
 */
const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
   // fetchBooks is a memoized function to fetch books data from the API
    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;

            if(docs){
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;
             // Returning a new object with the necessary book details
                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                setBooks(newBooks);

                if(newBooks.length > 1){
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]); // The function is re-created when searchTerm changes

 // useEffect hook to call fetchBooks whenever searchTerm changes
    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);
    // Returning the context provider with the global state
    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

// Custom hook for easy access to the global context
export const useGlobalContext = () => {
    return useContext(AppContext);
}
// Exporting AppContext and AppProvider for use in other parts of the application
export {AppContext, AppProvider};
