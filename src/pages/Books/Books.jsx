import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../api/api';
import Button from '../../components/Button/Button'

import {
    BookContainer,
    BookTitle
} from './Books.elements'

const Books = () => {

    const [livros, setLivros] = useState({}); //eslint-disable-line

    const getAllBooks = async () => {
        try {
            const response = await axios.get('http://localhost:8080/books/');
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllBooks();
    })

    return (
        <BookContainer>
            <Button text="Registrar um livro" />
            <BookTitle>Seus Livros</BookTitle>
        </BookContainer>
    )
}

export default Books