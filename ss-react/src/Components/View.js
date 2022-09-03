/* The home for picking a book to read. Here users pick which book they
 * will be reading from */

import { useState } from 'react';
import './FlexView.css';
import properties from '../properties.json';
import * as ListItems from './ListItems.js';
import { Link } from 'react-router-dom';

export default function View() {
    const [showBooks, setShowBooks] = useState(true)
    const [showSections, setShowSections] = useState(false)
    const [showChapter, setShowChapter] = useState(false)
    const [readChapter, setReadChapter] = useState(false)
    
    const bookList = properties.books.map(
        (book) =>
            <Link to={`/section/${book.key}`} class='book' key={book.key}>
                <ListItems.Book
                    title={book.title}
                    img={book.img}
                />
            </Link>
    )

    const sectionList =
        <ListItems.Book
            title='section'
            key='test'
            onClick={() => {
                setShowSections(false)
                setShowChapter(true)
            }}
        />

    const chapterView =
        <ListItems.Book
            title='chapter'
            onClick={() => {
                setShowChapter(false)
                setReadChapter(true)
            }}
        />

    const chapterRead = <h1>This is a chapter</h1>

    const view = 
        <div className='view'>
            { showBooks ? bookList : <></> }
            { showSections ? sectionList : <></> }
            { showChapter ? chapterView : <></> }
        </div>

    return(
        <>
            { readChapter ? chapterRead : view }
        </>
    )
}