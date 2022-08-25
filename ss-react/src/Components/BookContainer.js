import { useState } from 'react';
import './BookContainer.css';
import properties from '../properties.json';
import Book from './Book.js';

export default function BookContainer() {
    const [showBooks, setShowBooks] = useState(true)
    
    const bookList = properties.books.map(
        (book) =>
            <Book title={book.title} key={book.key} onClick={() => setShowBooks(!showBooks)} />
    )

    return(
        <div className='bookContainer'>
            { showBooks ? bookList : <></> }
        </div>
    )
}

