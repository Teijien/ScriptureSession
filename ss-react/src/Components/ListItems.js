import './ListItems.css'

const images = require.context('../Imgs', true)

export function Book(props) {
    let curr_img = images(`./${props.img}`)

    return(
        <>
            <img src={curr_img} alt={props.title} className='book' onClick={props.onClick} />
        </>
    )
}