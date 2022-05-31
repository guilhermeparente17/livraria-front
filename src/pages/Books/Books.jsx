import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card';
import BookSelectors from '../../store/bookSelectors';

import {
    BookContainer,
    BookTitle,
    BookHeader,
    BookContent
} from './Books.elements'

const Books = () => {

    const [livros, setLivros] = useState([]);
    const loading = useSelector(BookSelectors.getLoading)

    useEffect(() => {
        api.get("books").then(({ data }) => {
            setLivros(data);
        })
    }, [loading]);

    return (
        <BookContainer>
            <BookHeader>
                <Link to="/criar-livro"><Button text="+ Registrar um livro" /></Link>
                <BookTitle>Seus Livros</BookTitle>
            </BookHeader>

            <BookContent>
                {livros?.map(livro => (
                    <Card key={livro._id} livro={livro} />
                ))}
            </BookContent>
        </BookContainer>
    )
}

export default Books