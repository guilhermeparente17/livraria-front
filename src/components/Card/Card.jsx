import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import api from '../../api/api'
import { endLoading, initLoading } from '../../store/booksActionTypes'


import {
    CardContainer,
    CardImage,
    CardTitle,
    CardDescription,
    CardButtons,
    CardContent,
    CardButton
} from './Card.Elements'

const Card = ({ livro }) => {

    const dispatch = useDispatch();

    const handleRemoveBook = async () => {
        try {
            dispatch(initLoading())
            await api.delete(`/books/${livro._id}`);
            alert('Livro removido com sucesso!')
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(endLoading())
        }
    }

    return (
        <CardContainer>
            <CardImage src={livro.imageUrl} />

            <CardContent>
                <CardTitle>{livro.name}</CardTitle>
                <CardDescription>{livro.description}</CardDescription>

                <CardButtons>
                    <Link to={`/editar-livro/${livro._id}`}><CardButton bgColor={'#295495'}>Visualizar</CardButton></Link>
                    <CardButton onClick={() => handleRemoveBook()} bgColor={'#CE0000'}>Remover</CardButton>
                </CardButtons>
            </CardContent>
        </CardContainer>
    )
}

export default Card