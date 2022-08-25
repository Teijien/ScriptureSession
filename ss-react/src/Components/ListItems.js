import logo from '../logo.svg'
import './ListItems.css'

export function Book(props) {
    return(
        <>
            <img src={logo} alt={props.title} className='book' onClick={props.onClick} />
        </>
    )
}