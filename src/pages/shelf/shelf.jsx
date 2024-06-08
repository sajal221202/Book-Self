import { useContext } from "react";
import { AppContext } from "../../context";
import React from "react";
import '../../components/books/books.css';
import '../../index.css';
import './shelf.css';
const Shelf = () =>{
    
    const {bookShelf, setbookShelf} = useContext(AppContext);

    const getBooks = bookShelf.map(book => ({
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

    return(
        <div>
            <div className="shelf">
                MY-SHELF
            </div>
            <section className='booklist'>
                    <div className='container'>
                        <div className='booklist-content'>
                            {getBooks.slice(0, 10).map((book, index) => (
                                <div key={index} className='book-item'>
                                    <div className='book-item-info'>
                                        <div className='book-item-info-item'>
                                            <span>{book.title}</span>
                                        </div>
                                        <div className='book-item-info-item'>
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
            </div> 
    )
}

export default Shelf;