import { useState } from 'react';
import './View.css';
import properties from '../properties.json';
import * as ListItems from './ListItems.js';

export default function View() {
    const [showBooks, setShowBooks] = useState(true)
    const [showSections, setShowSections] = useState(false)
    const [showChapter, setShowChapter] = useState(false)
    const [readChapter, setReadChapter] = useState(false)
    
    const bookList = properties.books.map(
        (book) =>
            <ListItems.Book
                title={book.title}
                key={book.key}
                img={book.img}
                onClick={() => {
                    setShowBooks(false)
                    setShowSections(true)
                }}
            />
    )

    const sectionList =
        <ListItems.Book
            title='section'
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