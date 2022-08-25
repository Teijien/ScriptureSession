import { useState } from "react";
import logo from '../logo.svg'
//import goTo from '../goTo.js'

export default function Book(props) {
    return(
        <>
            <img src={logo} alt={props.title} className='book' onClick={props.onClick} />
        </>
    )
}