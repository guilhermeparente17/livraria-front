import React from 'react'
import {
    ButtonFormat
} from './Button.Elements'

const Button = ({ text }) => {
    return (
        <>
            <ButtonFormat>{text}</ButtonFormat>
        </>
    )
}

export default Button