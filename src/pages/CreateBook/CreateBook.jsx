import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../../api/api';

import { useNavigate } from "react-router-dom";
import {
    CreateBookContainer,
    CreateBookTitle,
    CreateBookInsert,
    CreateBookContent,
    CreateBookForm,
    CreateBookLabel,
    CreateBookInput,
    CreateBookInputContent,
    CreateBookTextArea,
    CreateBookButtons,
    CreateBookButton,
    CreateBookImg
} from './CreateBook.Elements'

const CreateBook = () => {
    const [nome, setNome] = useState('');
    const [imagemUrl, setImagemUrl] = useState('');
    const [descricao, setDescricao] = useState('');
    const navigate = useNavigate();

    const id = useParams();
    console.log(id.id);

    useEffect(() => {
        const editBook = async () => {
            const response = await api.get(`/books/${id.id}`);
            console.log(response.data);
            setNome(response?.data?.name);
            setImagemUrl(response?.data?.imageUrl);
            setDescricao(response?.data?.description);
        }

        if (id?.id) {
            editBook();
        }
    }, [id?.id]);

    useEffect(() => {
        setImagemUrl(imagemUrl);
    }, [imagemUrl]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: nome,
            description: descricao,
            imageUrl: imagemUrl
        }

        try {
            if (id?.id) {
                await api.patch(`/books/${id?.id}`, data);
                alert('Livro editado com sucesso!');
                navigate("/livros");
            } else {
                await api.post('/books/', data);
                alert('Livro criado com sucesso!');
                navigate("/livros");
            }
        } catch (error) {
            console.log(error);
        }

        console.log(data);
    }

    return (
        <CreateBookContainer>
            <CreateBookTitle>Registre seu livro</CreateBookTitle>

            <CreateBookContent>
                <CreateBookInsert width={'70%'}>
                    <CreateBookForm>
                        <CreateBookInputContent>
                            <CreateBookLabel>Nome</CreateBookLabel>
                            <CreateBookInput type="text" value={nome} onChange={e => setNome(e.target.value)} />
                        </CreateBookInputContent>

                        <CreateBookInputContent>
                            <CreateBookLabel>Imagem (endereço de imagem)</CreateBookLabel>
                            <CreateBookInput type="text" value={imagemUrl} onChange={e => setImagemUrl(e.target.value)} />
                        </CreateBookInputContent>

                        <CreateBookInputContent>
                            <CreateBookLabel>Descrição</CreateBookLabel>
                            <CreateBookTextArea value={descricao} onChange={e => setDescricao(e.target.value)} id="description" name="description" rows="4" cols="50" />
                        </CreateBookInputContent>

                        <CreateBookButtons>
                            <CreateBookButton onClick={(e) => handleSubmit(e)} bgColor={'#295495'}>{id?.id ? 'Editar Livro' : 'Registrar Livro'}</CreateBookButton>
                            <Link to="/livros"><CreateBookButton bgColor={'gray'} >Voltar</CreateBookButton></Link>
                        </CreateBookButtons>

                    </CreateBookForm>
                </CreateBookInsert>

                <CreateBookInsert width={'500px'}>
                    <CreateBookImg src={imagemUrl} />
                </CreateBookInsert>
            </CreateBookContent>
        </CreateBookContainer>
    )
}

export default CreateBook