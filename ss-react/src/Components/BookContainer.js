import './BookContainer.css';
import properties from '../properties.json';
import Book from './Book.js';

export default function BookContainer() {
    //const books = JSON.parse(properties).books;
    return(
        <div className='bookContainer'>
            {
            properties.books.map((book) => <Book title={book.title} />)
            }

            {
            // Hard coded imgs
            }
            {/*
            <img src={logo} alt='OT' className='Book' />
            <img src={logo} alt='NT' className='Book' />
            <img src={logo} alt='BoM' className='Book' />
            <img src={logo} alt='D&C' className='Book' />
            <img src={logo} alt='PoGP' className='Book' />
            */}
        </div>
    )
}

