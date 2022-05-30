import React from 'react'
import {
    ButtonFormat
} from './Button.Elements'

const Button = ({ text }) => {
    return (
        <>
            <ButtonFormat marginRight={200}>+ {text}</ButtonFormat>
        </>
    )
}

export default Button