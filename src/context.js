import React, { useState, createContext, useCallback ,useEffect } from "react";

const api = "https://openlibrary.org/search.json?title=";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [books,setBooks] = useState('');
    const [loading, setLoading] = useState(true);
    const [bookShelf, setbookShelf] = useState(() => {
        const storedBookShelf = localStorage.getItem('bookShelf');
        return storedBookShelf ? JSON.parse(storedBookShelf) : [];
    });

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try {
            if(search){
                const response = await fetch(`${api}${search}`);
                const data = await response.json();
                const {docs} = data;
                if(docs){
                    const bookDetail = docs.slice(0,10).map(book=>{
                        const {key, title, edition_count} = book;
                        return {
                            id: key,
                            title: title,
                            edition_count: edition_count
                        }
                    });
                    setBooks(bookDetail);
                }else{
                    console.log("No books found.");
                    setBooks([]);
                }
                setLoading(false);
            }
        }catch (error){
            console.error('Error encountered:', error);
            setLoading(false);
        }
    },[search]);
    

    useEffect(() => {
        fetchBooks();
    }, [search, fetchBooks]);

    useEffect(() => {
        localStorage.setItem('bookShelf', JSON.stringify(bookShelf));
    }, [bookShelf]);

    return (
        <AppContext.Provider value={{ search, setSearch, books, setBooks, loading, bookShelf, setbookShelf }}>
            {children}
        </AppContext.Provider>
    );
};
