import React, { useContext } from "react";
import { AppContext } from "../../context";
import './books.css';
import Loader from "../Loader/Loader";

const Book = () => {
    const { loading , books, bookShelf, setbookShelf } = useContext(AppContext);

    if(loading) return <Loader />;

    const getBooks = books.map(book => ({
        id: book.id,
        title: book.title,
        edition_count: book.edition_count
    }));

    const handleAddToShelf = (bookId) => {
        const book = getBooks.find(book => book.id === bookId);
        if (!book) return;
        const index = bookShelf.findIndex(item => item.id === bookId);
        if (index === -1) {
            setbookShelf([...bookShelf, { id: bookId, title: book.title, edition_count: book.edition_count }]);
        } else {
            setbookShelf(bookShelf.filter(item => item.id !== bookId));
        }
    };
    

    return (
            <section className='booklist'>
                <div className='container'>
                    <div className='booklist-content grid'>
                        {getBooks.slice(0, 10).map((book, index) => (
                            <div key={index} className='book-item flex flex-column flex-sb'>
                                <div className='book-item-info text-center'>
                                    <div className='book-item-info-item title fw-7 fs-18'>
                                        <span>{book.title}</span>
                                    </div>
                                    <div className='book-item-info-item edition-count fs-15'>
                                        <span className='text-capitalize fw-7'>Total Editions: </span>
                                        <span>{book.edition_count}</span>
                                    </div>
                                    <div className="addShelf-btn">
                                        <button onClick={() => handleAddToShelf(book.id)}>
                                                    {bookShelf.find(item => item.id === book.id) ? 'Remove from Shelf' : 'Add to Shelf'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    );
};

export default Book;
