import './ListItems.css'

const images = require.context('../Imgs', true)

export function Book(props) {
    let curr_img
    try {
        curr_img = images(`./${props.img}`)
    } catch(err) {
        console.log("Image doesn't exist. Using img alt")
        console.log(err)
        curr_img = null
    }

    return(
        <>
            <img src={curr_img} alt={props.title} className='book' onClick={props.onClick} />
        </>
    )
}