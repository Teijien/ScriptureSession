import logo from '../logo.svg'

export default function Book(props) {
    return(
        <>
            <img src={logo} alt={props.title} className='book' />
        </>
    )
}